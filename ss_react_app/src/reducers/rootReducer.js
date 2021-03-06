import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import users from './userReducer'
import students from './studentReducer'
import calls from './callReducer'
import loading from './loadingReducer'
import localState from './localStateReducer'

const appReducer = combineReducers({
	users,
	students,
	calls,
	localState,
	loading,
	routing: routerReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer