import React, { Component } from 'react';
//import ReactGA from 'react-ga';
import { withRouter } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

//const options = {};

// const trackPage = (page) => {
//   ReactGA.set({
//     page,
//     ...options
//   });
//   ReactGA.pageview(page);
// };

class App extends Component {
  componentWillMount() {
    //const { history } = this.props;
    //history.push('/page/dashboard');
    // this.unlisten = history.listen((location) => {
    //   const nextPage = `${location.pathname}`;
    //   trackPage(nextPage);
    // });
  }

  componentWillUnmount() {
    // this.unlisten();
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
        <NotificationContainer />
      </div>
    );
  }
}
export default withRouter(App);