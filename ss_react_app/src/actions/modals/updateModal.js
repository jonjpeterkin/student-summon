export default function updateModal(modal, formData) {
	return function(dispatch) {
		dispatch({type: "UPDATE_MODAL", payload: { modal, formData }})
	}
}
