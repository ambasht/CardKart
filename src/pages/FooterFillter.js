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
        
            footer = <div className="sw-fillter-sort">
                <div className="sw-fillter-sort-item">Fillter&nbsp;<i class="fas fa-filter"></i>
                </div>
                <div className="sw-fillter-sort-item">Sort&nbsp;<i class="fas fa-sort-amount-up-alt"></i>
                </div>
            </div>;
        

        return (

            <div>{footer}</div>

        );
    }
}
export default Footer;