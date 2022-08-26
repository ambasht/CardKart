import React from 'react'
import Img from '../img/card.jpeg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.openPop = this.openPop.bind(this);
        this.closePop = this.closePop.bind(this);
        this.state = {
            openPopState: false,


        };
    }
    
    openPop() {
        this.setState({ openPopState: true });
        //console.log("btn press");
    };
    closePop() {
        this.setState({ openPopState: false });
    }

    navigateResult = () => {
        this.props.onClick("results");
    }

    navigateHome = () => {
        this.props.onClick("home");
    }

    changeFooter = (ele) => {
        this.props.onClick(ele);
    }
    render() {

        const settings = {
            dots: true,
            lazyLoad: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,

        };

        const settings2 = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0
        };
        return (
            <div className="sw-index">
                <div className="sw-index-logo">Cards</div>
                <div className="sw-slider-container">
                    <Slider {...settings} className="sw-index-slider">
                        <div className="sw-index-card">
                            <div className="sw-index-card-top-img">
                                <img src={Img}></img>
                            </div>
                            <div className="sw-index-card-top">
                                <div className="sw-index-card-top-text">
                                    <div className="sw-index-card-top-text-line">Shop By</div>
                                    <div className="sw-index-card-top-text-tittle">Ocassion</div>
                                </div>
                            </div>
                            <Link to={'/CardKart/home'} className="sw-index-card-bottom"><button >Explore</button></Link>
                        </div>

                        <div className="sw-index-card">
                            <div className="sw-index-card-top-img">
                                <img src={Img2}></img>
                            </div>
                            <div className="sw-index-card-top">
                                <div className="sw-index-card-top-text">

                                    <div className="sw-index-card-top-text-tittle">Shop for</div>
                                </div>
                            </div>
                            <div className="sw-index-card-bottom">
                                <button style={{ width: "45%" }} to={'/CardKart/search'}>Her</button>
                                <button style={{ width: "45%" }} to={'/CardKart/search'}>Him</button>
                            </div>
                        </div>

                        <div className="sw-index-card">
                            <div className="sw-index-card-top-img">
                                <img src={Img}></img>
                            </div>
                            <div className="sw-index-card-top">
                                <div className="sw-index-card-top-text">
                                    <div className="sw-index-card-top-text-line">Looking for</div>
                                    <div className="sw-index-card-top-text-tittle">Something</div>
                                </div>
                            </div>

                            <div className="sw-index-card-bottom">
                                <form >
                                    <input type="text"></input>

                                </form>
                                <button style={{ borderRadius: "0px 10px 10px 0px" }} to={'/CardKart/search'}>Search</button>

                            </div>
                        </div>


                        <div className="sw-index-card">
                            <div className="sw-index-card-top-img">
                                <img src={Img2}></img>
                            </div>
                            <div className="sw-index-card-top">
                                <div className="sw-index-card-top-text">
                                    <div className="sw-index-card-top-text-line">Shop By</div>
                                    <div className="sw-index-card-top-text-tittle">Category</div>
                                </div>
                            </div>
                            <div className="sw-index-card-bottom"><button onClick={this.openPop}>Explore</button></div>
                        </div>


                    </Slider>
                </div>

                <div className={this.state.openPopState ? "sw-explore active" : "sw-explore"} >
                    <div className="sw-explore-close" onClick={this.closePop}>
                        <i class="fa fa-window-close" aria-hidden="true"></i>

                    </div>
                    <div className="sw-index-logo" style={{ color: "#fff", marginTop: "45px" }}>Explore by<br />Occasion</div>
                    <div className="sw-explore-crousel">
                        <Slider {...settings2} className="sw-index-slider">
                            <Link className="sw-explore-card" to={'/CardKart/search'} t>
                                <img src={Img} />
                            </Link>
                            <Link className="sw-explore-card" to={'/CardKart/search'} >
                                <img src={Img2} />
                            </Link>
                            <Link className="sw-explore-card" to={'/CardKart/search'} >
                                <img src={Img} />
                            </Link>
                        </Slider>
                    </div>
                </div>
            </div>
        ); 
    }
}
export default Index;