import $ from 'jquery'

export default function getUserInfo() {
	return function(dispatch) {
		$.ajax({
			type: 'GET',
			url: 'http://localhost:3000/api/users/show',
			headers: {authorization: localStorage.getItem('jwt')},
			contentType: 'application/json; charset=utf-8',
			datatype: 'json'
		}).done((response) => {
			if(response.error){
				console.log(response.error)
			} else {
				dispatch({type: 'STORE_USER_INFO', payload:
					{currentUser: {
						id: response.user_id,
						email: response.email,
						firstName: response.first_name,
						lastName: response.last_name,
						title: response.title,
						job: response.job
					}}
				})
			}
		})
	}
}