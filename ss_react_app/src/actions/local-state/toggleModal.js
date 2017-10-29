export default function toggleModal(component) {
	return function(dispatch) {
		dispatch({type: "TOGGLE_MODAL", payload: { component }})
	}
}
