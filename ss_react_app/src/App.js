import React, { Component } from 'react';
import Layout from './components/Layout'
import { Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={Layout} />
      </div>
    );
  }
}

export default App;
