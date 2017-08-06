import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends Component {

  render(){
		return (
			<div>
				<nav>
          <Link to='/'>HOME</Link>
          . . . . .
          <Link to='/login'>LOGIN</Link>
        </nav>
			</div>
		)
  }
}

export default Header
// function mapStateToProps(state) {
//   return {currentUser: state.users.currentUser}
// }

// export default connect(mapStateToProps)(Home)
