import React, { Component } from 'react';

export default class IndexComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className='video_sec'>
                <div className='container'>
                    <div className='left_vdo'>
                        <img src='images/vdo_bg.jpg' alt=''/>
                    </div>
                    <div className='right_vdo'>
                        <h3>You’re the first to know when prices drop!</h3>
                        <p>
                            It’s simple. We will monitor your favourite product and send you an alert when the product is at a price you like. 
                        </p>
                        <a className='site_btn' href='/register'>Set your alert <i className='fa fa-arrow'></i></a>
                        {/* <button className='watch_btn pop_btn' onClick={this.showVideo}><i className='fa fa-play' aria-hidden='true'></i> Watch intro</button> */}
                    </div>
                </div>
                <div className='popup' style={{display : this.props.videoShow ? 'block' : 'none'}}>
                    <div className='pop_cntnr'>
                        <button className='close_btn pop_btn'><i className='fa fa-close' aria-hidden='true'  onClick={this.props.hideVideo}></i></button>
                        <iframe src='https://player.vimeo.com/video/354611999' title = 'network error' width='100%' height='360' frameBorder='0' allow='autoplay; fullscreen' allowFullScreen='allowFullScreen'></iframe>
                    </div>
                </div>
            </div>
        );
    } 
}
