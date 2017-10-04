const defaultState = {
}

export default function students(state = defaultState, action) {
	switch(action.type) {
		case "GET_STUDENTS":
			return {
				...state,
				students: action.payload
			}
		case "CREATE_STUDENT":
			return {...state, students: state.students.concat(action.payload)}
		case "UPDATE_STUDENT":
			return {
				...state,
				students: state.students.map((student) => {
					return student.id === action.payload.id ? action.payload : student
				})
			}
		case "DELETE_STUDENT":
			return {
				...state,
				students: state.students.filter((s) => s.id !== action.payload)
			}
		default:
			return state
	}
}