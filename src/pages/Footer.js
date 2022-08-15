import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FooterIndex from './FootIndex';
import Index from './Index';
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import Img from '../img/card.jpeg';
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            footerValue: 3,
        };
    }

    changeFooter = (nextValue) => {
        if (nextValue=== 'index') {
            this.setState({ footerValue: 3 }, console.log(this.state.footerValue));
            console.log("susc")
        }
        else if (nextValue === '/home') {
            this.setState({ footerValue: 2 }, console.log(this.state.footerValue));
            
        }
        
        console.log(nextValue)

    };
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
        // var ifSearchActive = this.props.results;
        let footer;
        if (this.state.footerValue == 1) {
            footer = <div className="sw-fillter-sort">
                <div className="sw-fillter-sort-item">Fillter&nbsp;<i class="fas fa-filter"></i>
                </div>
                <div className="sw-fillter-sort-item">Sort&nbsp;<i class="fas fa-sort-amount-up-alt"></i>
                </div>
            </div>;
        }


        else if (this.state.footerValue === 2) {
            footer = <div className="sw-footer">
                <Link className={this.state.footerValue == 2 ? "sw-footer-item" + " " + "active" : "sw-footer-item"} to={'/home'} onClick={this.changeFooter}>
                    <i class="fas fa-border-all"></i>
                    <div className="sw-footer-item-name">Category</div>
                </Link>
                <Link className="sw-footer-item" to={''}>
                    <i class="fas fa-heart"></i>
                    <div className="sw-footer-item-name">Favourite</div>
                </Link>
                <Link className="sw-footer-item" to={'/'} onClick={() => this.changeFooter("index")}>
                    <i class="fas fa-home"></i>
                    <div className="sw-footer-item-name">Home</div>
                </Link>
                <Link className="sw-footer-item" to={'/'}>
                    <i class="fas fa-hat-wizard"></i>
                    <div className="sw-footer-item-name">Spells</div>
                </Link>
                <Link className="sw-footer-item" to={'/'}>
                    <i class="fas fa-user"></i>
                    <div className="sw-footer-item-name">Profile</div>
                </Link>
            </div>;
        }
        else if (this.state.footerValue == 3) {
            footer = <>
               <Index onClick={this.changeFooter}/>
                <FooterIndex /></>
        }
        else if (this.state.footerValue === 4) {
            footer = <div className="sw-cart-footer">

                <Link to={'/home'} className="text-one" onClick={this.changeFooter} >Proceed to buy</Link>
                <div className="text-two" >Total $200</div>

            </div>
        }
        return (

            <div>{footer}</div>

        );
    }
}
export default Footer;