import $ from 'jquery'
import setLoading from '../setLoading'

export default function getStudents() {
	return function(dispatch) {
		dispatch(setLoading('ShowStudents', true))
		dispatch(setLoading('ShowCalls', true))
		$.ajax({
			type: 'GET',
			url: 'http://localhost:3000/api/students',
			headers: {authorization: localStorage.getItem('jwt')},
			contentType: 'application/json; charset=utf-8',
			datatype: 'json'
		}).done((response) => {
			if(response.error){
				console.log(response.error)
			} else {
				dispatch({type: 'GET_STUDENTS', payload: response.students})
			}
			dispatch(setLoading('ShowStudents', false))
			dispatch(setLoading('ShowCalls', false))
		})
	}
}