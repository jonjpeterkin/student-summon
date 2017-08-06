import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers/rootReducer'
import history from './history'


const composeEnhancers = composeWithDevTools({})

export default function configureStore() {
  return createStore(
  	rootReducer, undefined, composeEnhancers(applyMiddleware(
  		thunk,
  		routerMiddleware(history)
  	))
  )
}