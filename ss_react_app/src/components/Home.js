import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import updateLocalState from '../actions/local-state/updateLocalState'
import getUserInfo from '../actions/users/getUserInfo'
import editUser from '../actions/users/editUser'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

class Home extends Component {

	welcome() {
    if(!this.props.loading) {
      return <h2>Welcome, {this.props.currentUser.profName}!</h2>
    } else {
      return <h2>Welcome!</h2>
    }
  }

  handleChange(valueName, event) {
    this.props.updateLocalState(
      'Home',
      { [valueName]: event.target.value }
    )
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  pickRoom() {
    if (!this.props.loading) {
      return (
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup>
            <Label for="roomName">What room are you in?</Label>
            <Input name="roomName" id="roomName" value={this.props.local.roomName} onChange={this.handleChange.bind(this, 'roomName')}/>
          </FormGroup>
          <Button color="primary" type="submit">Save Changes</Button>{' '}
        </Form>
      )
    }
  }

  render() {
		return (
			<div>
        <div className="App-header">
          {this.welcome()}
        </div> <br/>
        <div>
          {this.pickRoom()}
        </div>
			</div>
		)
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getUserInfo, editUser, updateLocalState }, dispatch)
}

function mapStateToProps(state) {
  return {
    currentUser: state.users.currentUser,
    loading: state.loading.Home,
    local: state.localState.Home
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
