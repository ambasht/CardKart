import React from 'react'
import Img from '../img/card.jpeg';

import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

class ResultSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayInfo: false,
        }
    };
    toggleInfo=()=>{
        this.setState({displayInfo:!this.state.displayInfo});
    }
    
    render() {


        const settings2 = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            swipeToSlide: true,
            beforeChange: function (currentSlide, nextSlide) {
                console.log("before change", currentSlide, nextSlide);
            },
            afterChange: function (currentSlide) {
                console.log("after change", currentSlide);
            }
        };
        const settings = {
            dots: true,
            lazyLoad: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,

        };

        return (
            <div className="sw-result-slider" >
                <div className="sw-result-slider-box">
                    <div className="sw-result-slider-crousel">
                        <Slider {...settings2} className="sw-result-slider-crousel-box">
                            <div className="sw-result-slider-crousel-card">
                                <div className="sw-result-slider-crousel-card-img">
                                    <img src={Img} />


                                </div>
                            </div>
                            <div className="sw-result-slider-crousel-card">
                                <div className="sw-result-slider-crousel-card-img">
                                    <img src={Img} />


                                </div>
                            </div>

                        </Slider>

                        <div className="sw-result-slider-card-bottom">

                            <div className="sw-result-slider-card-bottom-left">
                                <div className="sw-result-slider-card-bottom-left-top">A Greeting Card</div>
                                <div className="sw-result-slider-card-bottom-left-bottom">$100</div>
                            </div>
                            <div className="sw-result-slider-card-bottom-right">
                                <i class="fa fa-info-circle" aria-hidden="true" onClick={this.toggleInfo}></i>
                                <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                <i class="fa fa-heart" aria-hidden="true"></i>

                            </div>
                            <div className="sw-result-slider-card-info" style={this.state.displayInfo ? { display: "block" } : { display: "none" }}>
                                <div className="sw-result-slider-card-info-close" onClick={this.toggleInfo}>
                                    <i class="fas fa-times-circle"></i>
                                </div>
                                <Slider {...settings} className="sw-result-slider-sub-crousel">
                                    <div className="sw-result-slider-sub-crousel-card">
                                        <img src={Img} />
                                    </div>
                                    <div className="sw-result-slider-sub-crousel-card">
                                        <img src={Img} />
                                    </div>
                                    <div className="sw-result-slider-sub-crousel-card">
                                        <img src={Img} />
                                    </div>

                                </Slider>
                                <div className="sw-result-info-add-cart-btn">
                                    <div className="add-to-cart">Add to cart  &nbsp;<i class="fa fa-cart-plus" aria-hidden="true"></i></div>
                                </div>
                                <div className="sw-result-card-info-head"> Description </div>
                                <div className="sw-result-card-info-text"> A beautiful greeting card for any ocassion you will love to gift to anyone </div>

                                <div className="sw-result-card-info-head"> Spesification </div>
                                <div className="sw-result-card-info-text"> Height&nbsp;: 24cm<br />
                                                                           Width &nbsp;&nbsp;: 12cm<br />
                                                                           Length : 34cm<br />
                                                                           Paper &nbsp;&nbsp;: 240GSM<br />
                                </div>

                                <div className="sw-result-card-info-head"> Reviews </div>

                                <div className="sw-result-card-info-customer-review">
                                    <div className="sw-result-card-info-text-bold">Ram</div>
                                    <div className="sw-card-review">
                                        <i class="fas fa-star golden"></i>
                                        <i class="fas fa-star golden"></i>
                                        <i class="fas fa-star golden"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div className="sw-result-card-info-text"> A very beautiful card at a reasonable rate </div>
                                </div>


                            </div>
                        </div>



                    </div>
                </div>
            </div>
        );
    }
}
export default ResultSlider;