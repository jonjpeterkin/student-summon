import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import auth from '../../lib/auth'
import createCall from '../../actions/calls/createCall'
import toggleModal from '../../actions/local-state/toggleModal'
import updateLocalState from '../../actions/local-state/updateLocalState'
import CreateStudent from '../students/CreateStudent'
import EditStudent from '../students/EditStudent'
import { Table, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardSubtitle } from 'reactstrap'

class CreateCall extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.props.toggleModal('CreateCall')
  }

  handleStudentEdit(student) {
    this.props.toggleModal('EditStudent')
    this.props.updateLocalState('EditStudent',
      {
        id: student.id,
        name: student.name,
        room: student.room
      }
    )
  }

  handleStudentAdd(student, event) {
    event.stopPropagation()
    this.props.updateLocalState(
      'CreateCall',
      { students: this.props.local.students.concat(student.id) }
    )
  }

  handleStudentRemove(student, event) {
    event.stopPropagation()
    this.props.updateLocalState(
      'CreateCall',
      { students: this.props.local.students.filter((id) => id !== student.id) }
    )
  }

  handleChange(valueName, event) {
    this.props.updateLocalState(
      'CreateCall',
      { [valueName]: event.target.value }
    )
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.createCall({
      description: this.props.local.description,
      time_for: this.props.local.timeFor,
      students: this.props.local.students
    })
    this.toggle()
  }

  studentPicker() {
    if(!this.props.students) { return 'Add a Student!' }
    var button
    let rows = this.props.students.map((student) => {
      if(this.props.local.students.includes(student.id)) {
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
      <Card>
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
          <Button size="sm" outline color="success" onClick={this.props.toggleModal.bind(this, 'CreateStudent')}>+ New Student</Button>
        </div>
      </Card>
    )
  }

  render() {
		return(
			<div>
        <Modal isOpen={this.props.local.toggle} toggle={this.toggle} className="CreateCall">
          <ModalHeader toggle={this.toggle}>Make a New Call</ModalHeader>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <ModalBody>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input name="description" id="description" value={this.props.local.description} onChange={this.handleChange.bind(this, 'description')}/>
              </FormGroup>
              <FormGroup>
                <Label for="timeFor">Time</Label>
                <Input type="time" name="timeFor" id="timeFor" value={this.props.local.timeFor} onChange={this.handleChange.bind(this, 'timeFor')}/>
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
	return {local: state.localState.CreateCall, students: state.students.students}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ createCall, toggleModal, updateLocalState }, dispatch)
}

export default auth(connect(mapStateToProps, mapDispatchToProps)(CreateCall))
