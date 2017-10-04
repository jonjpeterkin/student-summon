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

  loginToggle() {
    if(this.props.currentUser) {
      return(
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/calls">Calls</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/students">Students</NavLink>
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
            <NavLink tag={Link} to="#">Sign Up</NavLink>
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
            {this.loginToggle()}
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
