import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import 'react-notifications/lib/notifications.css';

class AppMain extends Component {
  render() {
    return (
      <div className="app">
      </div>
    );
  }
}

export default withRouter(connect(
  (state) => {
    return {
      
    };
  },
  dispatch => ({
  })
)(AppMain));