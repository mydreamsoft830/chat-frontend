import React, { Component } from 'react';

export default class FaqComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (   
            <div className='content_sec'>
                <div className='container'>
                    <div className='pg_title'>
                        <h2>FAQ <small>(frequently asked questions)</small></h2>
                    </div>
                    <div id='accordion' className='faq_sec'>
                        <h3>What exactly do you do?</h3>
                        <div>
                            <p>
                            We are a group of individuals who have created this platform to alert you when there's a price change on any product you place under our watch.
                            </p>
                        </div>
                        <h3>How do you compare prices?</h3>
                        <div>
                            <p>
                            It’s simple. Paste a link to the product you want us to watch and set a desired price. Our web crawler will then monitors the link for any price change and then alerts you. Say for instance, you want to know when a product drops from $20 to $18. You paste the product link on our website and our website lets you know when the price hits $18.
                            </p>
                        </div>
                        <h3>When were you launched?</h3>
                        <div>
                            <p>
                            We officially launched in the second half of 2019, but the concept has been cooking for a while.
                            </p>
                        </div>
                        <h3>Are there others like you?</h3>
                        <div>
                            <p>
                            Like everything else in life, we do have competition. However, there is nothing exactly like Wispri out there - we do believe that our offering stands apart because it is unique and designed to be convenient. 
                            </p>
                        </div>
                        <h3>Do you make price comparisons across different platforms?</h3>
                        <div>
                            <p>
                            No, we don't. We only monitor the link that our users paste.
                            </p>
                        </div>
                        <h3>How can we contact you?</h3>
                        <div>
                            <p>
                            Click on the "Contact us" link below on ways to contact us.
                            </p>
                        </div>
                        <h3>Do you monitor sites in languages other than English?</h3>
                        <div>
                            <p>
                            Unfortunately, we don't at the moment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    } 
}
