import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from './Header'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import Profile from './users/Profile'
import EditUser from './users/EditUser'
import ShowStudents from './students/ShowStudents'
import ShowCalls from './calls/ShowCalls'
import getUserInfo from '../actions/users/getUserInfo'
import SpecialistPortal from './SpecialistPortal'
import TeacherPortal from './TeacherPortal'

class Layout extends Component {

  componentWillMount() {
    this.getData()
  }

  getData() {
    if (!this.props.currentUser && localStorage.getItem('jwt')) {
      this.props.getUserInfo()
    }
  }

  render() {
    return (
      <div className="Layout">
        <div className='header'>
	        <Header />
        </div>
        <div className='Content'>
      		<Switch>
						<Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route path='/spec' component={SpecialistPortal} />
            <Route path='/teach' component={TeacherPortal} />
					</Switch>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {currentUser: state.users.currentUser}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getUserInfo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
