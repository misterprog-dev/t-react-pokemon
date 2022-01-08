import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppNavigator from './components/AppNavigator';

export default class App extends Component {
  render() {
    return (
      <Router>
        <AppNavigator />
      </Router>
    )
  }
}
