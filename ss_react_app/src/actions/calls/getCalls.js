import $ from 'jquery'
import setLoading from '../setLoading'

export default function getCalls() {
	return function(dispatch) {
		dispatch(setLoading('ShowCalls', true))
		$.ajax({
			type: 'GET',
			url: 'http://localhost:3000/api/calls',
			headers: {authorization: localStorage.getItem('jwt')},
			contentType: 'application/json; charset=utf-8',
			datatype: 'json'
		}).done((response) => {
			if(response.error){
				console.log(response.error)
			} else {
				dispatch({type: 'GET_CALLS', payload: response.calls})
			}
			dispatch(setLoading('ShowCalls', false))
		})
	}
}