import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from './Header'
import Home from './Home'
import Profile from './users/Profile'
import EditUser from './users/EditUser'
import ShowStudents from './students/ShowStudents'
import ShowCalls from './calls/ShowCalls'
import getUserInfo from '../actions/users/getUserInfo'

class SpecialistPortal extends Component {

  render() {
    return (
      <div className="SpecialistPortal">
    		<Switch>
					<Route exact path='/spec' component={Home} />
          <Route path='/spec/students' component={ShowStudents} />
					<Route path='/spec/calls' component={ShowCalls} />
          <Route path='/spec/profile/edit' component={EditUser} />
          <Route path='/spec/profile' component={Profile} />
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
