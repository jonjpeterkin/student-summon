import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import auth from '../../lib/auth'
import createStudent from '../../actions/students/createStudent'
import toggleModal from '../../actions/local-state/toggleModal'
import updateLocalState from '../../actions/local-state/updateLocalState'
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class CreateStudent extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.props.toggleModal('CreateStudent')
  }

  handleNameChange(event) {
    this.props.updateLocalState('CreateStudent', {name: event.target.value})
  }

  handleRoomChange(event) {
    this.props.updateModal('CreateStudent', {room: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.createStudent({name: this.props.local.name, room: this.props.local.room})
    this.toggle()
  }

	render() {
		return(
			<div>
        <Modal isOpen={this.props.local.toggle} toggle={this.toggle} className="CreateStudent">
          <ModalHeader toggle={this.toggle}>Add a Student</ModalHeader>
          <Form onSubmit={this.handleSubmit.bind(this)}>
	          <ModalBody>
		          <FormGroup>
		            <Label for="name">Name</Label>
		            <Input name="name" id="name" value={this.props.local.name} onChange={this.handleNameChange.bind(this)}/>
		          </FormGroup>
		          <FormGroup>
		            <Label for="room">Room</Label>
		            <Input name="room" id="room" value={this.props.local.room} onChange={this.handleRoomChange.bind(this)}/>
		          </FormGroup>
	          </ModalBody>
	          <ModalFooter>
	            <Button color="primary" type="submit">Save</Button>{' '}
	            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
	          </ModalFooter>
        	</Form>
        </Modal>
			</div>
		)
	}
}
function mapStateToProps(state) {
	return { local: state.localState.CreateStudent }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ createStudent, updateLocalState, toggleModal }, dispatch)
}

export default auth(connect(mapStateToProps, mapDispatchToProps)(CreateStudent))
