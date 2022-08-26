import React from 'react'
import Img from '../img/card.jpeg';
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import FooterDetail from './FooterDetail';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class Home extends React.Component {

    
    render() {
        const settings = {
            dots: true,
            lazyLoad: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0,

        };
        return (
            <div className="sw-home">
                <div className="sw-home-box">
                    <div className="sw-home-card-top">
                        <div className="sw-home-card-top-text">
                            <div className="sw-home-card-top-text-line">Explore By</div>
                            <div className="sw-home-card-top-text-tittle">Ocassion</div>
                        </div>
                    </div>
                    <div className="sw-slider-container">

                        <Slider {...settings} className="sw-home-slider">
                            <Link to={'/CardKart/search'}className="sw-home-card" >
                                <div className="sw-home-card-top-img">
                                    <img src="https://ascension.co.in/product/design-kundan-meena-rakhi-raksha-bandhan-gift-band-stone-pearl-rakhi-for-brother-bhaiya-with-roli-tilak-pack/"></img>
                                </div>


                            </Link>
                            <div className="sw-home-card"onClick={this.changePage}>
                                <div className="sw-home-card-top-img">
                                    <img src={Img}></img>
                                </div>


                            </div>
                            <div className="sw-home-card"onClick={this.changePage}>
                                <div className="sw-home-card-top-img">
                                    <img src={Img}></img>
                                </div>


                            </div>

                            <div className="sw-home-card" onClick={this.changePage}>
                                <div className="sw-home-card-top-img">
                                    <img src={Img}></img>
                                </div>


                            </div>

                        </Slider>

                    </div>
                </div>

                <div className="sw-home-box">
                    <div className="sw-home-card-top">
                        <div className="sw-home-card-top-text">
                            <div className="sw-home-card-top-text-line">Browse By</div>
                            <div className="sw-home-card-top-text-tittle">Offers</div>
                        </div>
                    </div>
                    <div className="sw-home-cards-container">
                        <div className="sw-home-card-img" onClick={this.changePage}>
                            <img src={Img}></img>
                        </div>

                        <div className="sw-home-card-img" onClick={this.changePage}>
                            <img src={Img}></img>
                        </div>
                        <div className="sw-home-card-img" onClick={this.changePage}>
                            <img src={Img}></img>
                        </div>
                        <div className="sw-home-card-img" onClick={this.changePage}>
                            <img src={Img}></img>
                        </div>
                    </div>
                </div>
                
                <div className="sw-home-box">
                    <div className="sw-home-card-top">
                        <div className="sw-home-card-top-text">
                            <div className="sw-home-card-top-text-line">Explore By</div>
                            <div className="sw-home-card-top-text-tittle">Category</div>
                        </div>
                    </div>
                    <div className="sw-slider-container">

                        <Slider {...settings} className="sw-home-slider">
                            <div className="sw-home-card" onClick={this.changePage}>
                                <div className="sw-home-card-top-img">
                                    <img src={Img}></img>
                                </div>


                            </div>
                            <div className="sw-home-card" onClick={this.changePage}>
                                <div className="sw-home-card-top-img">
                                    <img src={Img}></img>
                                </div>


                            </div>
                            <div className="sw-home-card" onClick={this.changePage}>
                                <div className="sw-home-card-top-img">
                                    <img src={Img}></img>
                                </div>


                            </div>

                            <div className="sw-home-card" onClick={this.changePage}>
                                <div className="sw-home-card-top-img">
                                    <img src={Img}></img>
                                </div>


                            </div>

                        </Slider>

                    </div>
                </div>
                
                <div className="sw-home-box">
                    <div className="sw-home-card-top" >
                        <div className="sw-home-card-top-text">
                            <div className="sw-home-card-top-text-line">Sort By</div>
                            <div className="sw-home-card-top-text-tittle">Price Range</div>
                        </div>
                    </div>
                    <div className="sw-home-cards-container">
                        <div className="sw-home-card-img"   onClick={this.changePage}>
                            <img src={Img}></img>
                        </div>

                        <div className="sw-home-card-img" onClick={this.changePage}>
                            <img src={Img}></img>
                        </div>
                        <div className="sw-home-card-img" onClick={this.changePage}>
                            <img src={Img}></img>
                        </div>
                        <div className="sw-home-card-img" onClick={this.changePage}>
                            <img src={Img}></img>
                        </div>
                    </div>
                </div>
                
                <FooterDetail/>
                <div className="sw-clearspace"></div>
            </div>
            );
            
        
    }
}
export default Home;