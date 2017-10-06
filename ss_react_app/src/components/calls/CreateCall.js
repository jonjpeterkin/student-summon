import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import auth from '../../lib/auth'
import createCall from '../../actions/calls/createCall'
import toggleModal from '../../actions/modals/toggleModal'
import updateModal from '../../actions/modals/updateModal'
import CreateStudent from '../students/CreateStudent'
import EditStudent from '../students/EditStudent'
import { Table, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardSubtitle } from 'reactstrap'

class CreateCall extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.props.toggleModal('createCall')
  }

  handleStudentEdit(student) {
    this.props.toggleModal('editStudent')
    this.props.updateModal('editStudent',
      {
        id: student.id,
        name: student.name,
        room: student.room
      }
    )
  }

  handleStudentAdd(student, event) {
    event.stopPropagation()
    this.props.updateModal(
      'createCall',
      { students: this.props.modal.students.concat(student.id) }
    )
  }

  handleStudentRemove(student, event) {
    event.stopPropagation()
    this.props.updateModal(
      'createCall',
      { students: this.props.modal.students.filter((id) => id !== student.id) }
    )
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
      students: this.props.modal.students
    })
    this.toggle()
  }

  studentPicker() {
    if(!this.props.students) { return 'Add a Student!' }
    var button
    let rows = this.props.students.map((student) => {
      if(this.props.modal.students.includes(student.id)) {
        button = <Button size="sm" color="info" onClick={this.handleStudentRemove.bind(this, student)}>- Remove</Button>
      } else {
        button = <Button size="sm" color="success" onClick={this.handleStudentAdd.bind(this, student)}>+ Add</Button>
      }
      // onClick={this.handleStudentEdit.bind(this, student) }
      return(
        <tr onClick={this.handleStudentEdit.bind(this, student)}>
          <td>{student.name}</td>
          <td>{student.room}</td>
          <td>{button}</td>
        </tr>
      )
    })
    return(
      <Card body>
        <div id="StudentPicker">
          <CardSubtitle>Students to Call For</CardSubtitle>
          <Table hover id="PickerTable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Room</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </Table>
          <Button size="sm" outline color="success" onClick={this.props.toggleModal.bind(this, 'createStudent')}>+ New Student</Button>
        </div>
      </Card>
    )
  }

  render() {
		return(
			<div>
        <Modal isOpen={this.props.modal.toggle} toggle={this.toggle} className="CreateCall">
          <ModalHeader toggle={this.toggle}>Make a New Call</ModalHeader>
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
              {this.studentPicker()}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="submit">Save</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Form>
          <EditStudent />
          <CreateStudent />
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
