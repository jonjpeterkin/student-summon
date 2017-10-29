export default function updateLocalState(component, formData) {
	return function(dispatch) {
		dispatch({type: "UPDATE_LOCAL_STATE", payload: { component, formData }})
	}
}
