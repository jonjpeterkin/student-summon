import React, { Component } from 'react'
import history from '../stores/history'
import { connect } from 'react-redux'

export default function auth(ConnectedComponent){
  class AuthorizedComponent extends Component {
    componentWillMount(){
      if(!this.props.currentUser && !localStorage.getItem('jwt')){
        history.push('/login')
      }
    }
    componentWillReceiveProps(){
      if(!this.props.currentUser && !localStorage.getItem('jwt')){
        history.push('/login')
      }
    }
    render(){
      return(<ConnectedComponent {...this.props} />)
    }
  }
  function mapStateToProps(state){
    return { currentUser: state.users.currentUser }
    // return { currentUser: state.users.currentUser, history: history }
  }
  return connect(mapStateToProps)(AuthorizedComponent)
}