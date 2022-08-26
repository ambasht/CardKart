import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class Header extends React.Component {
    back = () => {



    }
    render() {


        let header;

        header = <div className="sw-header">
            <div className="sw-header-box">
                <div className="sw-logo"><i class="fas fa-chevron-left" style={{ "fontSize": "0.8em" }} onClick={this.back}></i> Cards</div>
                <div className="sw-head-icon-container">
                    <Link to={'/CardKart/favrouit'}>
                        <i class="fas fa-heart" style={{ "fontSize": "0.8em", "display": "flex", "justifyContent": "center", "alignItems": "center", "color": "#FF4033" }}></i>
                    </Link>
                    <Link to={'/CardKart/cart'} className="sw-cart">
                        <i class="fas fa-shopping-cart"></i>
                        <span className="badge">1</span>
                    </Link>
                </div>

            </div>
            <form className="sw-search">
                <input type="text"></input>
                <i class="fas fa-search"></i>
            </form>

        </div>;


        return (

            <div>{header}</div>

        );
    }
}
export default Header;