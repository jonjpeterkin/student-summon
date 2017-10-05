import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import createUser from '../actions/users/createUser'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {email: "", password: "", profName: "", fullName: ""}
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value})
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }

  handleFullNameChange(event) {
    this.setState({fullName: event.target.value})
  }

  handleProfNameChange(event) {
    this.setState({profName: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.createUser(this.state)
  }

  render(){
		return (
			<div>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" value={this.state.email} onChange={this.handleEmailChange.bind(this)}/>
          </FormGroup>
          <FormGroup>
            <Label for="fullName">Full Name</Label>
            <Input type="fullName" name="fullName" id="fullName" value={this.state.fullName} onChange={this.handleFullNameChange.bind(this)}/>
          </FormGroup>
          <FormGroup>
            <Label for="profName">Professional Name</Label>
            <Input type="profName" name="profName" id="profName" value={this.state.profName} onChange={this.handleProfNameChange.bind(this)}/>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)}/>
          </FormGroup>
          <Button type='submit' outline color='primary'>Submit</Button>
        </Form>
			</div>
		)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({createUser: createUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(Signup)
