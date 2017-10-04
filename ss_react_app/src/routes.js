import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './components/Login'

export default(
	<Switch>
		<Route exact path='/' component={Home} />
		<Route exact path='/login' component={Login} />
	</Switch>
)
