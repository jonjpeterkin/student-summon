import React, { Component } from 'react';
import Header from './Header'
import { Route, Switch } from 'react-router-dom'
import Login from './Login'
import Home from './Home'

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <div className='Header'>
	        <Header />
        </div>
        <div className='Content'>
      		<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/login' component={Login} />
					</Switch>
        </div>
      </div>
    );
  }
}

export default Layout;
