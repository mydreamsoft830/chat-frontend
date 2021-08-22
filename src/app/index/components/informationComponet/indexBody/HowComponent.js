import React, { Component } from 'react';

export default class HowComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (            
            <div className='content_sec'>
                <div className='container'>
                    <div className='abt_pg '>
                        <div className='col-6 howtouse'>
                            <div className='pg_title'>
                                <h2>How to save with Wispri</h2>
                            </div>
                            <p>It’s simple!</p>
                            <ul className='steps'>
                                <li>
                                    <h3>1. Sign in to your Wispri account</h3>
                                    <p>Or register in a few simple steps if you don't have an account yet.</p>
                                </li>
                                <li>
                                    <h3 style={{color: '#ecca63'}}>2. Paste the URL of the product you like </h3>
                                    <p>You can then easily set up a price drop alert from your dashboard.</p>
                                </li>
                                <li>
                                    <h3 style={{color: '#52b8a7'}}>3. Done! Sit back and save.</h3>
                                    <p>As soon as the price drops, we’ll send you an email or SMS. </p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6 pull-right'>
                            <img className='how_img' src='images/how.png' alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        );
    } 
}
