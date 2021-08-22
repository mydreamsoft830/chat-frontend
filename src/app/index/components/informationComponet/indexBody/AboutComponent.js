import React, { Component } from 'react';

export default class AboutComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (            
            <div className='content_sec'>
                <div className='container'>
                    <div className='pg_title'><h2>Wispri. Your wish, your price.</h2></div>
                        <div className='abt_pg'>
                            <div className='col-6'>
                                <p>We’ll help you get the best deal on your favourite products.</p>
                                <p>
                                    <h4 style={{fontWeight :800,fontSize :22,marginBottom :5}}>Be the first to know when prices drop!</h4>
                                    Wispri will monitor your favourite product and send you an alert when the product is at a price you like. There’s so much noise out there, so many deals dropping each day, we understand that it can get overwhelming. We simplify the process for you.
                                </p>
                                <p>
                                    <h4 style={{fontWeight :800,fontSize :22,marginBottom :5}}>How does it work?</h4>
                                    Wispri is an online price monitoring engine that uses web crawlers to monitor and report price changes on different websites. Or in simpler terms, we just watch your product like a hawk, till it hits the price you want.
                                </p>
                                <p>
                                    <h4 style={{fontWeight :800,fontSize :22,marginBottom :5}}>Who are we?</h4>
                                    We’re a small team of tech geeks who love to build products that offer real value. While hunting for deals ourselves, we realized that there was nothing that tracked individual product deals: a few hundred lines of code later, we launched Wispri to fill that vacuum. And we’re constantly tweaking it to make it better.
                                </p>
                                <p>
                                    <h4 style={{fontWeight :800,fontSize :22,marginBottom :5}}>What’s next?</h4>
                                    We’re partnering with more brands each day to bring you exclusive deals. Watch this space! 
                                </p>
                        </div>
                        <div className='col-6 pull-right'>
                            <img src='http://webexpertise.us/wispri/images/hdr_image.png' alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        );
    } 
}
