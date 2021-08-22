import React, { Component } from 'react';
import * as api from '../../../../../api/UserApi'
import {NotificationManager} from 'react-notifications';

export default class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactEmail : '',
            validation : null
        };
        this._handle=this._handle.bind(this);
    }

    _handle(e) {
        var email = e.target.value;
        this.setState({contactEmail : email});
        var validation = email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) ?
        'Invalid email address' : undefined ;
        this.setState({validation : validation});
    }

    async sendSubScribe() {
        var res = await api.SendSubScribe(this.state.contactEmail);
        var data = res.data;
        if(data.success){
            this.setState({contactEmail : ''});
            NotificationManager.success('Great! You’ll start receiving our emails soon.',
                '',8000);
        }else{
            NotificationManager.success('We’re sorry, something’s gone wrong. Please try again later.',
                '',8000);
        } 
    }

    render() {
        return (
            <div className='container'>
                <div className='nws_ltr'>
                    <div className='hdng_sec'>
                        <h3>Don’t miss out</h3>
                        <p>Share your email address to receive our offer updates and important notifications.</p>
                    </div>
                    <form>
                        <input type='text' value={this.state.contactEmail} onChange={this._handle} placeholder='Enter your email address' />
                        <input type='button' value='Subscribe' onClick={()=>this.sendSubScribe()}/>
                        <div style={{textAlign : 'center', color : 'red'}}>
                            <p style={{textAlign : 'center', color : 'red',marginTop : 5}}>{this.state.validation && this.state.validation}</p>
                        </div>
                    </form>
                    
                </div>
                <div className='ftr_mid'>
                    <div className='ftr_box ftr_info'>
                        <a href='/index'><img src='images/logo.png' alt=''/></a>
                        <p>
                            We work to offer real value. Who are we? We’re a small team of tech geeks who love to build products that make a difference.
                        </p>
                    </div>
                    <div className='ftr_box ftr_menu'>
                        <h4>Company</h4>
                        <ul>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/how'>How to use</a></li>
                        <li><a href='/contact'>Contact us</a></li>
                        </ul>
                    </div>
                    <div className='ftr_box ftr_menu'>
                        <h4>Legal</h4>
                        <ul>
                        <li><a href='#p'>Privacy</a></li>
                        <li><a href='#p'>Site Map</a></li>
                        <li><a href='/faq'>Faq</a></li>
                        <li><a href='#p'>Term</a></li>
                        </ul>
                    </div>
                    <div className='ftr_box getin'>
                        <h4>Get in Touch</h4>
                        <a className='email' href='mailto:info@wispri.com'>Email :  hello@wispri.com</a>
                        <ul className='scl'>
                            <li><a href='https://www.facebook.com' rel='noopener noreferrer' target='_blank'><i className='fa fa-facebook'></i></a></li>
                            <li><a href='https://www.linkedin.com' rel='noopener noreferrer' target='_blank'><i className='fa fa-linkedin'></i></a></li>
                            <li><a href='https://twitter.com' rel='noopener noreferrer' target='_blank'><i className='fa fa-twitter'></i></a></li>
                            <li><a href='https://www.instagram.com' rel='noopener noreferrer' target='_blank'><i className='fa fa-instagram'></i></a></li>
                        </ul>
                    </div>
                    <div className='copy_right'>
                        <p>© 2019 Wispri. All rights reserved</p>
                    </div>
                </div>
            </div>
        );
    } 
}
