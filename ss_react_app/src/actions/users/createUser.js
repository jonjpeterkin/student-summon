import $ from 'jquery'
import history from '../../stores/history'
import getUserInfo from '../users/getUserInfo'

export default function createUser(formData) {
	return function(dispatch) {
		$.ajax({
			type: 'POST',
			url: 'http://localhost:3000/api/users',
			data: JSON.stringify({user: {
				email: formData.email,
				password: formData.password,
				full_name: formData.fullName,
				prof_name: formData.profName
			}}),
			contentType: 'application/json; charset=utf-8',
			datatype: 'json'
		}).done((response) => {
			if(response.error){
				console.log(response.error)
			} else {
				history.push('/')
				localStorage.setItem('jwt', response.jwt)
				dispatch(getUserInfo())
			}
		})
	}
}