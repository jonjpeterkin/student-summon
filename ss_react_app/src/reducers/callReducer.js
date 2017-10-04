const defaultState = {
	calls: []
}

export default function calls(state = defaultState, action) {
	switch(action.type) {
		case "GET_CALLS":
			return {
				...state,
				calls: action.payload
			}
		case "CREATE_CALL":
			return {...state, calls: state.calls.concat(action.payload)}
		case "UPDATE_CALL":
			return {
				...state,
				calls: state.calls.map((call) => {
					return call.id === action.payload.id ? action.payload : call
				})
			}
		case "DELETE_CALL":
			return {
				...state,
				calls: state.calls.filter((c) => c.id !== action.payload)
			}
		default:
			return state
	}
}