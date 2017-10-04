import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import auth from '../../lib/auth'
import createCall from '../../actions/calls/createCall'
import toggleModal from '../../actions/modals/toggleModal'
import updateModal from '../../actions/modals/updateModal'
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class CreateCall extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.props.toggleModal('createCall')
  }

  handleChange(valueName, event) {
    this.props.updateModal(
      'createCall',
      { [valueName]: event.target.value }
    )
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.createCall({
      description: this.props.modal.description,
      time_for: this.props.modal.timeFor,
      students: []
    })
    this.toggle()
  }

	render() {
		return(
			<div>
        <Modal isOpen={this.props.modal.toggle} toggle={this.toggle} className="CreateCall">
          <ModalHeader toggle={this.toggle}>Add a Call</ModalHeader>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <ModalBody>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input name="description" id="description" value={this.props.modal.description} onChange={this.handleChange.bind(this, 'description')}/>
              </FormGroup>
              <FormGroup>
                <Label for="timeFor">Time</Label>
                <Input type="time" name="timeFor" id="timeFor" value={this.props.modal.timeFor} onChange={this.handleChange.bind(this, 'timeFor')}/>
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
	return {modal: state.modals.createCall, students: state.students.students}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ createCall, toggleModal, updateModal }, dispatch)
}

export default auth(connect(mapStateToProps, mapDispatchToProps)(CreateCall))
