import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import auth from '../../lib/auth'
import getUserInfo from '../../actions/users/getUserInfo'
import updateLocalState from '../../actions/local-state/updateLocalState'
import editUser from '../../actions/users/editUser'
import EditUser from './EditUser'

import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap'

class Profile extends Component {

	componentWillMount() {
		this.props.getUserInfo()
	}

	jobFmt() {
		if (this.props.currentUser.job === 'specialist') {
			return '/spec'
		} else if (this.props.currentUser.job === 'teacher') {
			return '/teach'
		}
	}

	handleEdit() {
		this.props.updateLocalState('EditUser',
			{
				roomId: this.props.currentUser.roomId,
				fullName: this.props.currentUser.fullName,
				profName: this.props.currentUser.profName,
				email: this.props.currentUser.email,
				job: this.props.currentUser.job
			}
		)
	}

	render() {
		return ( !this.props.loading ? (
			<div>
				<h3>Profile</h3><br/>
				Full Name: {this.props.currentUser.fullName} <br/>
				Professional Name: {this.props.currentUser.profName} <br/>
				Job: {this.props.currentUser.job} <br/>
				Email: {this.props.currentUser.email} <br/>
				Room ID: {this.props.currentUser.roomId} <br/>
				<Button tag={Link} to={this.jobFmt() + "/profile/edit"} color="info" onClick={this.handleEdit.bind(this)}>Edit</Button>
			</div>
		) : <h3>LOADING...</h3> )
	}
}

function mapStateToProps(state){
	return {
		currentUser: state.users.currentUser,
		loading: state.loading.Profile
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ getUserInfo, editUser }, dispatch)
}

export default auth(connect(mapStateToProps, mapDispatchToProps)(Profile))