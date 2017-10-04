export default function toggleModal(modal) {
	return function(dispatch) {
		dispatch({type: "TOGGLE_MODAL", payload: { modal }})
	}
}
