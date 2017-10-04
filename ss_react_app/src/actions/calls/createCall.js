import $ from 'jquery'

export default function createCalls(formData) {
	return function(dispatch) {
		$.ajax({
			type: 'POST',
			url: 'http://localhost:3000/api/calls',
			headers: {authorization: localStorage.getItem('jwt')},
			data: JSON.stringify({call: formData}),
			contentType: 'application/json; charset=utf-8',
			datatype: 'json'
		}).done((response) => {
			if(response.error){
				console.log(response.error)
			} else {
				dispatch({type: 'CREATE_CALL', payload: response.call})
			}
		})
	}
}