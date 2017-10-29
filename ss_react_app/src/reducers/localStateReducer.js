const defaultState = {
	Home: {
		roomName: ""
	},
	EditStudent: {
		toggle: false,
		id: undefined,
		name: "",
		room: ""
	},
	EditUser: {
		roomid: 4,
		fullName: "",
		profName: "",
		email: "",
		job: ""
	},
	CreateStudent: {
		toggle: false,
		name: "",
		room: ""
	},
	CreateCall: {
		toggle: false,
		description: "",
		timeFor: "",
		students: []
	}
}

export default function localState(state = defaultState, action) {
	switch(action.type) {
		case "TOGGLE_MODAL":
			return {
				...state,
				[action.payload.component]: {
					...defaultState[action.payload.component],
					toggle: !state[action.payload.component].toggle
				}
			}
		case "UPDATE_LOCAL_STATE":
			return {
				...state,
				[action.payload.component]: {
					...state[action.payload.component],
					...action.payload.formData
				}
			}
		default:
			return state
	}
}