import React, { Component } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class IndexComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            force_reload: false
        };
    }
    componentDidMount() {
        document.addEventListener('resize', () => {
            this.setState({
                force_reload: !this.state.force_reload
            })
        })
    }
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay : true,
            autoplaySpeed : 2000,
            slidesToShow: 2,
            slidesToScroll: 2,
        };
        if (window.innerWidth < 510) {
            settings.slidesToScroll = 1;
            settings.slidesToShow = 1;
        }
        return (
            <div className='testi_sec'>
                <div className='container'>
                    <div className='testi_left'>
                        <small>What They Say</small>
                        <h3>And our users are happy with the results.</h3>
                        <p>The proof is in the saving. </p>
                    </div>
                    <div className='testi_rotator'>
                        <div className='testi-carousel owl-carousel' style={{display: 'block'}}>
                            <Slider {...settings}>                            
                                <div className='item'>
                                    <div className='testi_hdr'>
                                        <img src='/images/testi_img.png' alt=''/>
                                        <div className='testi_txt'>
                                            <h5>Rony Jonson1</h5>
                                            <span>lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page .</p>
                                </div>
                                <div className='item'>
                                    <div className='testi_hdr'>
                                        <img src='/images/testi_img.png' alt=''/>
                                        <div className='testi_txt'>
                                            <h5>Rony Jonson2</h5>
                                            <span>lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page .</p>
                                </div>
                                <div className='item'>
                                    <div className='testi_hdr'>
                                        <img src='/images/testi_img.png' alt=''/>
                                        <div className='testi_txt'>
                                            <h5>Rony Jonson3</h5>
                                            <span>lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page .</p>
                                </div>
                                <div className='item'>
                                    <div className='testi_hdr'>
                                        <img src='/images/testi_img.png' alt=''/>
                                        <div className='testi_txt'>
                                            <h5>Rony Jonson4</h5>
                                            <span>lorem Ipsum</span>
                                        </div>
                                    </div>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page .</p>
                                </div>                        
                            </Slider>
                        </div>
                    </div>
                </div>
                </div>
        );
    } 
}
