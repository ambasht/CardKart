import React from 'react'
import Img from '../img/card.jpeg';
import Img2 from '../img/card3.jpeg';
import FooterDetail from './FooterDetail';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Results extends React.Component {
    changePage = () => {
        this.props.onClick("resultSlider");
    }
    render() {
        return (
            <div className="sw-result">


                <div className="sw-cards">
                    <Link to={'/CardKart/results'} className="sw-card" >
                        <div className="sw-card-content">
                            <div className="sw-card-content-img">
                                <img src={Img}></img>
                            </div>
                            <div className="sw-card-content-title">Greeting card <i class="fas fa-heart"></i></div>
                            <div className="sw-card-content-desc">A simple yet preety greeting card</div>
                            <div className="sw-card-content-price">
                                <div className="sw-card-review">
                                    <i class="fas fa-star golden"></i>
                                    <i class="fas fa-star golden"></i>
                                    <i class="fas fa-star golden"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                ₹99</div>
                        </div>

                    </Link>
                    
                    <div className="sw-card" onClick={this.changePage}>
                    <Link to={'/CardKart/results'} className="sw-card" >
                        <div className="sw-card-content">
                            <div className="sw-card-content-img">
                                <img src={Img2}></img>
                            </div>
                            <div className="sw-card-content-title">Greeting card <i class="fas fa-heart"></i></div>
                            <div className="sw-card-content-desc">A simple yet preety greeting card</div>
                            <div className="sw-card-content-price">
                                <div className="sw-card-review">
                                    <i class="fas fa-star golden"></i>
                                    <i class="fas fa-star golden"></i>
                                    <i class="fas fa-star golden"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                ₹99</div>
                        </div>
                        </Link>
                    </div>
                    

                    <Link to={'/CardKart/results'} className="sw-card" >
                        <div className="sw-card-content">
                            <div className="sw-card-content-img">
                                <img src={Img}></img>
                            </div>
                            <div className="sw-card-content-title">Greeting card <i class="fas fa-heart"></i></div>
                            <div className="sw-card-content-desc">A simple yet preety greeting card</div>
                            <div className="sw-card-content-price">
                                <div className="sw-card-review">
                                    <i class="fas fa-star golden"></i>
                                    <i class="fas fa-star golden"></i>
                                    <i class="fas fa-star golden"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                ₹99</div>
                        </div>

                    </Link>
                    <Link to={'/CardKart/results'} className="sw-card" >
                        <div className="sw-card-content">
                            <div className="sw-card-content-img">
                                <img src={Img2}></img>
                            </div>
                            <div className="sw-card-content-title">Greeting card <i class="fas fa-heart"></i></div>
                            <div className="sw-card-content-desc">A simple yet preety greeting card</div>
                            <div className="sw-card-content-price">
                                <div className="sw-card-review">
                                    <i class="fas fa-star golden"></i>
                                    <i class="fas fa-star golden"></i>
                                    <i class="fas fa-star golden"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                ₹99</div>
                        </div>

                    </Link><Link to={'/CardKart/results'} className="sw-card" >
                        <div className="sw-card-content">
                            <div className="sw-card-content-img">
                                <img src={Img}></img>
                            </div>
                            <div className="sw-card-content-title">Greeting card <i class="fas fa-heart"></i></div>
                            <div className="sw-card-content-desc">A simple yet preety greeting card</div>
                            <div className="sw-card-content-price">
                                <div className="sw-card-review">
                                    <i class="fas fa-star golden"></i>
                                    <i class="fas fa-star golden"></i>
                                    <i class="fas fa-star golden"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                ₹99</div>
                        </div>

                    </Link><Link to={'/CardKart/results'} className="sw-card" >
                        <div className="sw-card-content">
                            <div className="sw-card-content-img">
                                <img src={Img2}></img>
                            </div>
                            <div className="sw-card-content-title">Greeting card <i class="fas fa-heart"></i></div>
                            <div className="sw-card-content-desc">A simple yet preety greeting card</div>
                            <div className="sw-card-content-price">
                                <div className="sw-card-review">
                                    <i class="fas fa-star golden"></i>
                                    <i class="fas fa-star golden"></i>
                                    <i class="fas fa-star golden"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                ₹99</div>
                        </div>

                    </Link>

                </div>

                <FooterDetail />

            </div>


        );
    }
}
export default Results;