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

    render() {

        
        // var ifSearchActive = this.props.results;
        let footer;

            footer = <div className="sw-footer">
                <Link className={this.state.footerValue == 2 ? "sw-footer-item" + " " + "active" : "sw-footer-item"} to={'/home'} onClick={this.changeFooter}>
                    <i class="fas fa-border-all"></i>
                    <div className="sw-footer-item-name">Category</div>
                </Link>
                <Link className="sw-footer-item" to={''}>
                    <i class="fas fa-heart"></i>
                    <div className="sw-footer-item-name">Favourite</div>
                </Link>
                <Link className="sw-footer-item" to={'/'} >
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
       
        return (

            <div>{footer}</div>

        );
    }
}
export default Footer;