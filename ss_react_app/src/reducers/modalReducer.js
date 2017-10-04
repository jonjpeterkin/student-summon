const defaultState = {
	editStudent: {
		toggle: false,
		id: null,
		name: "",
		room: ""
	},
	createStudent: {
		toggle: false,
		name: "",
		room: ""
	},
	createCall: {
		toggle: false,
		description: "",
		timeFor: "",
		students: []
	}
}

export default function students(state = defaultState, action) {
	switch(action.type) {
		case "TOGGLE_MODAL":
			return {
				...state,
				[action.payload.modal]: {
					...defaultState[action.payload.modal],
					toggle: !state[action.payload.modal].toggle
				}
			}
		case "UPDATE_MODAL":
			return {
				...state,
				[action.payload.modal]: {
					...state[action.payload.modal],
					...action.payload.formData
				}
			}
		default:
			return state
	}
}