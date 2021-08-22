import React, { Component } from 'react';

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewFlag1 : 'none'
        };
        this.accountAction = this.accountAction.bind(this);        
    }

    accountAction(){
        var viewFlag1 = 'none';
        if(this.state.viewFlag1 === 'none') viewFlag1 = 'block'; else viewFlag1 = 'none';
        this.setState({viewFlag1 : viewFlag1})
    }    

    render() {
        return (
            <div className='container2'>
                <div className='top_hdr2'>
                    <div className='logo_sec2'>
                        <a href='/index'><img src='/images/logo.png' alt='wispri' title='logo'/></a>
                    </div>
                    <div className='right_menu2'>
                        <ul>
                            <li><a href={this.props.indexName === 'dashboard' ? '/page/account' : '/page/dashboard'}>{this.props.indexName === 'dashboard' ? 'My Account' : 'Dashboard'}</a></li>
                            {/* <li><a href='support'>Support</a></li> */}
                            <li className='top_usr2'>
                                {
                                    this.props.user!==undefined&&
                                    <a href='#a' onClick={this.accountAction}>
                                        {this.props.user.username} 
                                        <i className='fa fa-angle-down' style={{marginLeft: 16}} aria-hidden='true'></i>
                                    </a>
                                } 
                                
                                <img src={this.props.user.profile.avatar_link === null ?'/images/user.jpg' : this.props.user.profile.avatar_link} alt=''/>
                                <ul className='sub_menu2' style={{display : this.state.viewFlag1}}>
                                    {/* <li><a href='/page/account'>My Account</a></li> */}
                                    <li onMouseLeave={()=>this.accountAction()}><a href='#p' onClick={this.props.logout}>Logout</a></li>
                                </ul>
                            </li>
                            <li className='srch2' style={{display:'none'}}>
                                <button className='srch_btn2'><i className='fa fa-search'></i></button>
                                <form className='srch_form2' style={{display: 'none'}}>
                                    <input type='search' placeholder='Search here...'/>
                                    <button><i className='fa fa-search'></i></button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>                
            </div>
        );
    } 
}
