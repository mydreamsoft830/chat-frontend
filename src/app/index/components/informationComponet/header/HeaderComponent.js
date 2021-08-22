import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import RegisterFormComponent from '../indexBody/RegisterFormComponent'

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className='container'>
                <div className='top_hdr'>
                    <div className='logo_sec'>
                        <a href='index'>
                            <img src='/images/logo.png' alt='wispri' title='logo'/>
                        </a>
                    </div>
                    <div className='right_menu'>
                        <ul>
                            {
                                !this.props.user && 
                                <li><a href='register'>Register</a></li>
                            }
                            {
                                this.props.user &&
                                <li className='login_btn'><a href='page/index' style={{fontSize: 'larger'}}>Dashboard</a></li>
                            }
                            {
                                !this.props.user &&
                                <li className='login_btn' onClick={this.props.loginFormView}><span className='site_btn' href='#p'>Login</span></li>
                            }                            
                        </ul>
                    </div>
                </div>
                {
                    this.props.indexName === 'index' &&
                    <div className='banner_sec'>
                        <div className='left_sec'>
                            <h3>
                                Need a better price?<br/>
                                Just Wispri it! 
                            </h3>
                            <p>
                                You just found something you love, but it’s out of your budget. 
                                Guess what, we’re here to help
                            </p>
                            <div className='right_vdo' style={{float : 'left'}}>
                                <button className='watch_btn pop_btn' onClick={this.props.showVideo}><i className='fa fa-play' aria-hidden='true'></i>How Wispri works?</button>
                            </div>
                        </div>
                        <div className='right_sec'>
                            <img src='images/hdr_image.png' alt=''/>
                        </div>
                    </div>                    
                }{
                    this.props.indexName === 'register' &&
                    <RegisterFormComponent/>                 
                }
            </div>
        );
    } 
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
    }
};

export default withRouter(connect(mapStateToProps)(HeaderComponent));
