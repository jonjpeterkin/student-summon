import $ from 'jquery'
import history from '../stores/history'
import getUserInfo from './users/getUserInfo'

export default function login(formData) {
	return function(dispatch) {
		$.ajax({
			type: 'POST',
			url: 'http://localhost:3000/api/login',
			data: JSON.stringify({auth: {
				email: formData.email,
				password: formData.password
			}}),
			contentType: 'application/json; charset=utf-8',
			datatype: 'json'
		}).done((response) => {
			if(response.error){
				console.log("ERROR")
				history.push('/login')
			} else {
				history.push('/')
				localStorage.setItem('jwt', response.jwt)
				dispatch(getUserInfo())
			}
		})
	}
}