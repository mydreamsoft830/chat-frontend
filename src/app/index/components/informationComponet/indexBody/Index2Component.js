import React, { Component } from 'react';

export default class IndexComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className='relr_sec'>
                <div className='container'>
                    <div className='hdng_sec'>
                        {/* <h3>We work to offer real value</h3> */}
                        <p>Who offers the best discount your product? We’ll do the hard work of finding out, so you don’t have to.</p>
                    </div>
                    <div className='rtlr_logos'>
                        <div className='rtlr_box rtlr1'>
                            <img src='images/i1.png' alt=''/>
                        </div>
                        <div className='rtlr_box rtlr2'>
                            <img src='images/i2.png' alt=''/>
                        </div>
                        <div className='rtlr_box rtlr3'>
                            <img src='images/i3.png' alt=''/>
                        </div>
                        <div className='rtlr_box rtlr4'>
                            <img src='images/i1.png' alt=''/>
                        </div>
                        <div className='rtlr_box rtlr5'>
                            <img src='images/i2.png' alt=''/>
                        </div>
                        <div className='rtlr_box rtlr6'>
                            <img src='images/i3.png' alt=''/>
                        </div>
                        <div className='rtlr_box rtlr7'>
                            <img src='images/i3.png' alt=''/>
                        </div>
                    </div>
                </div>
                </div>
        );
    } 
}
