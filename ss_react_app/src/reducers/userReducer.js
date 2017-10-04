const defaultState = {currentUser: null}

export default function users(state = defaultState, action) {
	switch(action.type) {
		case "CREATE_USER":
			return {...state}
		case "STORE_USER_INFO":
			return {
				...state,
				currentUser: action.payload.currentUser
			}
		case "LOGOUT":
			return {...defaultState}
		default:
			return state
	}
}
// const defaultState = {'creatingUser': false, 'currentUser': null}

// export default function users(state = defaultState, action) {
// 	switch(action.type) {
// 		case "CREATE_USER":
// 			return {...state, 'creatingUser': true}
// 		case "STORE_USER_INFO":
// 			return {
// 				...state,
// 				'creatingUser': false,
// 				'currentUser': action.payload.currentUser
// 			}
// 		case "LOGOUT":
// 			return {...state, 'creatingUser': false, 'currentUser': null}
// 		default:
// 			return state
// 	}
// }