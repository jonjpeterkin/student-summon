import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import history from '../../stores/history'
import auth from '../../lib/auth'
import updateLocalState from '../../actions/local-state/updateLocalState'
import getUserInfo from '../../actions/users/getUserInfo'
import editUser from '../../actions/users/editUser'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

class EditUser extends Component {
	constructor(props){
		super(props)
		this.state = {prefilled: false}
	}

	componentWillMount() {
		this.props.getUserInfo()
	}

	componentWillUpdate() {
		this.prefill()
	}

	prefill() {
		if (!this.props.loading && !this.state.prefilled) {
			this.props.updateLocalState(
				'EditUser',
				{
					fullName: this.props.currentUser.fullName,
			    profName: this.props.currentUser.profName,
			    email: this.props.currentUser.email,
			    job: this.props.currentUser.job,
			    roomId: this.props.currentUser.roomId
				}
			)
			this.setState({prefilled: true})
		}
	}

	handleChange(valueName, event) {
	  this.props.updateLocalState(
	    'EditUser',
	    { [valueName]: event.target.value }
	  )
	}

	handleSubmit(event) {
	  event.preventDefault()
	  this.props.editUser({
	    full_name: this.props.local.fullName,
	    prof_name: this.props.local.profName,
	    email: this.props.local.email,
	    job: this.props.local.job,
	    room_id: this.props.local.roomId
	  })
	  history.push(this.jobFmt() + '/profile')
	}

	jobFmt() {
		if (this.props.currentUser.job === 'specialist') {
			return '/spec'
		} else if (this.props.currentUser.job === 'teacher') {
			return '/teach'
		}
	}

	render() {
		return ( !this.props.loading ? (
			<div>
				<h3>Edit your Profile</h3><br/>
				<Form onSubmit={this.handleSubmit.bind(this)}>
			    <FormGroup>
			      <Label for="fullName">Full Name</Label>
			      <Input name="fullName" id="fullName" value={this.props.local.fullName} onChange={this.handleChange.bind(this, 'fullName')}/>
			    </FormGroup>
			    <FormGroup>
			      <Label for="profName">Professional Name</Label>
			      <Input name="profName" id="profName" value={this.props.local.profName} onChange={this.handleChange.bind(this, 'profName')}/>
			    </FormGroup>
			    <FormGroup>
			      <Label for="job">Job</Label>
			      <Input type="select" name="job" id="job" value={this.props.local.job} onChange={this.handleChange.bind(this, 'job')}>
			        <option value="teacher">Classroom Teacher</option>
            	<option value="specialist">Specialist</option>
          	</Input>
			    </FormGroup>
			    <FormGroup>
			      <Label for="email">Email</Label>
			      <Input name="email" id="email" value={this.props.local.email} onChange={this.handleChange.bind(this, 'email')}/>
			    </FormGroup>
			    <FormGroup>
			      <Label for="roomId">Room ID</Label>
			      <Input name="roomId" id="roomId" value={this.props.local.roomId} onChange={this.handleChange.bind(this, 'roomId')}/>
			    </FormGroup>
			    <Button color="primary" type="submit">Save Changes</Button>{' '}
			  </Form>
{/*				<InputGroup>
				  <Label>Full Name</Label>
				  <Input placeholder={this.props.currentUser.fullName}/>
				</InputGroup>
				<br/>
				<InputGroup>
				  <Label>Professional Name</Label>
				  <Input placeholder={this.props.currentUser.profName}/>
				</InputGroup>
				<br/>
				<InputGroup>
				  <Label>Email</Label>
				  <Input type="email" placeholder={this.props.currentUser.email}/>
				</InputGroup>
				<br/>
				<InputGroup>
				  <Label>Room Id</Label>
				  <Input placeholder={this.props.currentUser.roomId}/>
				</InputGroup>
				<br/>
				<InputGroup>
					<Label>Job</Label>
					<Input type="select" name="job">
            <option>Classroom Teacher</option>
            <option>Specialist</option>
          </Input>
        </InputGroup>
*/}
			</div>
		) : <h3>LOADING...</h3> )
	}
}

function mapStateToProps(state){
	return {
		currentUser: state.users.currentUser,
		loading: state.loading.Profile,
		local: state.localState.EditUser
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ getUserInfo, editUser, updateLocalState }, dispatch)
}

export default auth(connect(mapStateToProps, mapDispatchToProps)(EditUser))