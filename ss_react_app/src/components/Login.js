import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends Component {

  render(){
		return (
			<div>
      <br />
				WE HAVE ARRIVED
			</div>
		)
  }
}

export default Header
// function mapStateToProps(state) {
//   return {currentUser: state.users.currentUser}
// }

// export default connect(mapStateToProps)(Home)
