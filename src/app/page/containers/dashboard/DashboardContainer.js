import React, {Component} from 'react';
import {connect} from 'react-redux';

import HeaderComponent from '../../components/header/HeaderComponent'
import Dashboard1Component from '../../components/pageBody/Dashboard1Component'
import Dashboard2Component from '../../components/pageBody/Dashboard2Component'
import Dashboard3Component from '../../components/pageBody/Dashboard3Component'
import FooterComponent from '../../components/footer/FooterComponent'
import * as api from '../../../../api/UrlApi'
import { logout} from "../../../../reducers/userReducer";

class DashboardContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            user : this.props.user,
            searchstr : null,
            userUrls : null
        };        
        this.setSearchStr=this.setSearchStr.bind(this);
        this.urlLoad=this.urlLoad.bind(this);
    }


    componentDidMount() {
        if(!this.props.user) 
            this.props.history.push('/index'); 
        if(this.props.user) 
            this.urlLoad();
    }
    
    componentWillUnmount() {
                
    }

    setSearchStr(searchstr) {        
        this.setState({searchstr : searchstr});
    }

    urlLoad() {  
        (async () => {
            var res = await api.UrlLoad(this.state.searchstr);
            var data = res.data;
            if(data.success){
                this.setState({userUrls : data.userUrls});
            }
        })();      
    }

    render() {
        return (
            <div>
                <header className='site_hdr2'><HeaderComponent indexName={'dashboard'} user={this.state.user} logout={this.props.logout}/></header>
                <Dashboard1Component user={this.state.user} urlLoad={()=>this.urlLoad()}/>
                <Dashboard2Component/>
                <Dashboard3Component userUrls={this.state.userUrls} setSearchStr={(searchstr)=>this.setSearchStr(searchstr)} urlLoad={()=>this.urlLoad()}/>
                <footer className='dsbrd_ftr2'><FooterComponent indexName={'dashboard'}/></footer>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);

