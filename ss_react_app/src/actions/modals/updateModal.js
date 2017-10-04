export default function updateEditModal(modal, formData) {
	return function(dispatch) {
		dispatch({type: "UPDATE_MODAL", payload: { modal, formData }})
	}
}
