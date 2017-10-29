import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import logout from '../actions/logout'

class Header extends Component {

  handleLogout(event){
    event.preventDefault()
    this.props.logout()
  }

  viewSwitch() {
    if(this.props.currentUser && this.props.currentUser.job === 'specialist') {
      return(
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/spec/calls">Calls</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/spec/students">Students</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/spec/profile">Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="#" onClick={this.handleLogout.bind(this)}>Logout</NavLink>
          </NavItem>
        </Nav>
      )
    } else if(this.props.currentUser && this.props.currentUser.job === 'teacher') {
      return(
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/teach/calls">Calls</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/teach/profile">Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="#" onClick={this.handleLogout.bind(this)}>Logout</NavLink>
          </NavItem>
        </Nav>
      )
    } else {
      return(
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/login">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/signup">Sign Up</NavLink>
          </NavItem>
        </Nav>
      )
    }
  }

  render() {
		return (
			<div>
				<Navbar color='faded' light toggleable>
          <NavbarBrand tag={Link} to='/'>Student Summon</NavbarBrand>
          <Collapse isOpen={true} navbar>
            {this.viewSwitch()}
          </Collapse>
        </Navbar>
			</div>
		)
  }
}

function mapStateToProps(state) {
  return {currentUser: state.users.currentUser}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
