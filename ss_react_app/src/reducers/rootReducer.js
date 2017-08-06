import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import users from './userReducer'

const appReducer = combineReducers({
	users,
	routing: routerReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer