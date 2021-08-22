import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';

import DashboardContainer from './dashboard/DashboardContainer';
import AccountContainer from './account/AccountContainer';

class PageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };        
    }

    componentDidMount() {
        if(!this.props.user) 
            this.props.history.push('/index');   
    }
    
    componentWillUnmount() {

    }

    render() {
        const children = (
            <Switch>                
                <Route path="/page/index" exact component={DashboardContainer}/>
                <Route path="/page/dashboard" exact component={DashboardContainer}/>
                <Route path="/page/account" exact component={AccountContainer}/>
            </Switch>
        );  
        return (
            this.props.user ? <>{children}</> : <Redirect to="/index" />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
    }
};


export default withRouter(connect(mapStateToProps)(PageContainer));


