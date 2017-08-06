import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {

	welcome(){
    if(this.props.currentUser) {
      return <h2>Welcome, {this.props.currentUser.username}!</h2>
    } else if(!this.props.currentUser) {
      return <h2>Welcome!</h2>
    }
  }
  render(){
		return (
			<div>
        <div className="App-header">
          <h2>Welcome to Hell</h2>
        </div>
        <p className="App-intro">
          God Bless <code>Us.All</code>
        </p>
			</div>
		)
  }
}

function mapStateToProps(state) {
  return {currentUser: state.users.currentUser}
}

export default connect(mapStateToProps)(Home)
