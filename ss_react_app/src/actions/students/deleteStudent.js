import $ from 'jquery'

export default function deleteStudent(id) {
	return function(dispatch) {
		$.ajax({
			type: 'DELETE',
			url: `http://localhost:3000/api/students/${id}`,
			headers: {authorization: localStorage.getItem('jwt')},
			data: JSON.stringify({student: { id }}),
			contentType: 'application/json; charset=utf-8',
			datatype: 'json'
		}).done((response) => {
			if(response.error){
				console.log(response.error)
			} else {
				dispatch({type: 'DELETE_STUDENT', payload: id})
			}
		})
	}
}