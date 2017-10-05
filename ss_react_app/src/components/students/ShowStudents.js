import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import auth from '../../lib/auth'
import getStudents from '../../actions/students/getStudents'
import updateModal from '../../actions/modals/updateModal'
import toggleModal from '../../actions/modals/toggleModal'
import CreateStudent from './CreateStudent.js'
import EditStudent from './EditStudent.js'
import { Table, Button } from 'reactstrap'

class ShowStudents extends Component {

  componentWillMount() {
		this.props.getStudents()
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

  listStudents() {
  	if(!this.props.students) { return 'Add a Student!'}
  	let rows = this.props.students.map((student) => {
  		return(
  			<tr onClick={this.handleStudentEdit.bind(this, student)}>
  				<td>{student.name}</td>
  				<td>{student.room}</td>
  			</tr>
  		)
  	})
  	return(
  		<tbody>
  			{rows}
  		</tbody>
  	)
  }

	show() {
		return ( !this.props.loading ? (
			<div className={'ShowStudents'}>
				<h3>My Students</h3>
				<Table hover>
					<thead>
						<tr>
							<th>Name</th>
							<th>Room</th>
						</tr>
					</thead>
					{this.listStudents()}
				</Table>
        <Button color="success" onClick={this.props.toggleModal.bind(this, 'createStudent')}>+ Add a Student</Button>
				<EditStudent />
				<CreateStudent />
			</div>
		) : <h3>LOADING...</h3> )
	}

	render() {
		return this.show()
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.users.currentUser,
		students: state.students.students,
		loading: state.loading.showStudents
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getStudents, updateModal, toggleModal }, dispatch)
}

export default auth(connect(mapStateToProps, mapDispatchToProps)(ShowStudents))