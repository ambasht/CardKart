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
      
            footer = <div className="sw-cart-footer">

                <Link to={'/CardKart/cart/review'} className="text-one" onClick={this.changeFooter} >Review Details</Link>
                <div className="text-two" >Total ₹200</div>

            </div>
        
        return (

            <div>{footer}</div>

        );
    }
}
export default Footer;