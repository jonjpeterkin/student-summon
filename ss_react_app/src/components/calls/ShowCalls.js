import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import auth from '../../lib/auth'
import getCalls from '../../actions/calls/getCalls'
import getStudents from '../../actions/students/getStudents'
import toggleModal from '../../actions/local-state/toggleModal'
import CreateCall from './CreateCall'
import { Button, Table } from 'reactstrap'

class ShowCalls extends Component {

  componentWillMount() {
		this.props.getCalls()
		this.props.getStudents()
	}

  listCalls() {
  	if(!this.props.calls || this.props.calls === []) {return 'Add a Call!'}

  	let rows = this.props.calls.map((call) => {
  		return(
  			<tr>
  				<td>{call.time_for.split(' ')[0]}</td>
  				<td>{call.time_for.split(' ', 2)[1]}</td>
  				<td>{call.origin}</td>
  				<td>{call.students.map((student) => <div>{student.name}</div>)}</td>
  			</tr>
  		)
  	})
  	return(
  		<tbody>
  			{rows}
  		</tbody>
  	)
  }

	render() {
		return ( !this.props.loading ? (
			<div className={'ShowCalls'}>
				<h3>My Calls</h3>
				<Table hover>
					<thead>
						<tr>
							<th>Date</th>
							<th>Time</th>
							<th>Room</th>
							<th>Students</th>
						</tr>
					</thead>
					{this.listCalls()}
				</Table>
        <Button color="success" onClick={this.props.toggleModal.bind(this, 'CreateCall')}>+ New Call</Button>
				<CreateCall />
			</div>
		) : <h3>LOADING...</h3> )
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.users.currentUser,
		calls: state.calls.calls,
		students: state.students.students,
		loading: state.loading.ShowCalls
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getCalls, getStudents, toggleModal }, dispatch)
}

export default auth(connect(mapStateToProps, mapDispatchToProps)(ShowCalls))