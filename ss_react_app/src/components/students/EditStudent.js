import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import auth from '../../lib/auth'
import editStudent from '../../actions/students/editStudent'
import deleteStudent from '../../actions/students/deleteStudent'
import toggleModal from '../../actions/local-state/toggleModal'
import updateLocalState from '../../actions/local-state/updateLocalState'
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

class EditStudent extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.props.toggleModal('EditStudent')
  }

  handleNameChange(event) {
    this.props.updateLocalState('EditStudent', {name: event.target.value})
  }

  handleRoomChange(event) {
    this.props.updateLocalState('EditStudent', {room: event.target.value})
  }

  handleDelete(event){
    this.props.deleteStudent(this.props.local.id)
    this.toggle()
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.editStudent({
      id: this.props.local.id,
      name: this.props.local.name,
      room: this.props.local.room
    })
    this.toggle()
  }

	render() {
		return(
			<div>
        <Modal isOpen={this.props.local.toggle} toggle={this.toggle} className="EditStudent">
          <ModalHeader toggle={this.toggle}>Edit a Student</ModalHeader>
          <Form onSubmit={this.handleSubmit.bind(this)}>
	          <ModalBody>
		          <FormGroup>
		            <Label for="name">Name</Label>
		            <Input type="name" name="name" id="name" value={this.props.local.name} onChange={this.handleNameChange.bind(this)}/>
		          </FormGroup>
		          <FormGroup>
		            <Label for="room">Room</Label>
		            <Input type="room" name="room" id="room" value={this.props.local.room} onChange={this.handleRoomChange.bind(this)}/>
		          </FormGroup>
              <FormGroup>
                <Button outline color="danger" onClick={this.handleDelete.bind(this)}>Delete</Button>
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
	return { local: state.localState.EditStudent }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ editStudent, deleteStudent, toggleModal, updateLocalState }, dispatch)
}

export default auth(connect(mapStateToProps, mapDispatchToProps)(EditStudent))