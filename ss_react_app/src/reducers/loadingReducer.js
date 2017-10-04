const default_state = {
	showStudents: true,
	showCalls: true
}

export default function loading(state = default_state, action){
	switch(action.type) {
		case "LOADING":
			return {...state, [action.payload]: true}
		case "LOADED":
			return {...state, [action.payload]: false}
		default:
			return state
	}

}
