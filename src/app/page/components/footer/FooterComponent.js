import React, { Component } from 'react';

export default class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="container2">
                <div className="cpy_rt2">2019-2020 &copy; Wispri</div>
                <div className="ftr_menu2">
                    <ul>
                    <li><a href="/about">About </a></li>
                    <li><a href="/faq">Support</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        );
    } 
}
