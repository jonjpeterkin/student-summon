import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import login from '../actions/login'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {email: "", password: ""}
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value})
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.login(this.state)
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
  return bindActionCreators({login: login}, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)
