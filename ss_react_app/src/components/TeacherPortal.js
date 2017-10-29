import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from './Header'
import Home from './Home'
import Profile from './users/Profile'
import EditUser from './users/EditUser'
import ShowCalls from './calls/ShowCalls'
import getUserInfo from '../actions/users/getUserInfo'

class SpecialistPortal extends Component {

  render() {
    return (
      <div className="TeacherPortal">
    		<Switch>
					<Route exact path='/teach' component={Home} />
					<Route path='/teach/calls' component={ShowCalls} />
          <Route path='/teach/profile/edit' component={EditUser} />
          <Route path='/teach/profile' component={Profile} />
				</Switch>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {currentUser: state.users.currentUser}
}
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ getUserInfo }, dispatch)
// }

export default connect(mapStateToProps)(SpecialistPortal)
