import history from '../stores/history'

export default function logout() {
	return function(dispatch) {
		window.localStorage.removeItem("jwt")
		dispatch({type: "LOGOUT"})
	  history.push('/login')
	}
}