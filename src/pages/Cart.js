import React from 'react'
import Img from '../img/card.jpeg';

import Slider from "react-slick";
//import "../../node_modules/slick-carousel/slick/slick.css";
//simport "../../node_modules/slick-carousel/slick/slick-theme.css";
import FooterDetail from './FooterDetail';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayInfo: false,
        }
    };

    render() {
        return (
            <div className="sw-cartPage">
                <div className="sw-clearspace" style={{ background: "#fff", position: "fixed", top: "0", left: "0", zIndex: "1", width: "100%", height: "54px" }}></div>
                <div className="sw-clearspace"></div>
                <div className="sw-cartPage-header">
                    <div className="sw-logo"><i class="fas fa-chevron-left" style={{ "fontSize": "0.8em" }} onClick={this.back}></i> Cards</div>
                    <div className="sw-head-icon-container">
                        <i class="fas fa-search"></i>

                        <i class="fas fa-user"></i>

                    </div>
                </div>
                <div className="sw-cart-section">
                    <div className="sw-cartPage-heading">Items in cart</div>
                    <div className="sw-cartPage-content">
                        <div className="sw-cartPage-card">
                            <div className="sw-cartPage-card-left">
                                <img src={Img}></img>
                            </div>
                            <div className="sw-cartPage-card-right">
                                <div>
                                    <div className="sw-cartPage-card-right-name">A Greeting Card</div>
                                    <div className="sw-cartPage-card-right-price">₹100</div>
                                    <div className="sw-cartPage-card-right-button-box">
                                        <div className="sw-cartPage-card-right-button"><i class="fas fa-minus"></i></div>
                                        <div className="sw-cartPage-card-right-number">1</div>
                                        <div className="sw-cartPage-card-right-button"><i class="fas fa-plus"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sw-cartPage-card">
                            <div className="sw-cartPage-card-left">
                                <img src={Img}></img>
                            </div>
                            <div className="sw-cartPage-card-right">
                                <div>
                                    <div className="sw-cartPage-card-right-name">A Greeting Card</div>
                                    <div className="sw-cartPage-card-right-price">₹100</div>
                                    <div className="sw-cartPage-card-right-button-box">
                                        <div className="sw-cartPage-card-right-button"><i class="fas fa-minus"></i></div>
                                        <div className="sw-cartPage-card-right-number">1</div>
                                        <div className="sw-cartPage-card-right-button"><i class="fas fa-plus"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sw-cartPage-order-detail">

                            <div className="sw-cart-row-container">
                                <div className="order-detail-heading">Order Breakout</div>
                                <div className="order-detail-row">
                                    <div className="left">A Greeting Card</div>
                                    <div className="center">₹100 X 1</div>
                                    <div className="mid">:</div>
                                    <div className="right">₹100</div>
                                </div>
                                <div className="order-detail-row">
                                    <div className="left">A Greeting Card</div>
                                    <div className="center">₹100 X 1</div>
                                    <div className="mid">:</div>
                                    <div className="right">₹100</div>
                                </div>
                                <div className="order-detail-row">
                                    <div className="left">Delivery</div>
                                    <div className="center">₹2</div>
                                    <div className="mid">:</div>
                                    <div className="right">+₹2</div>
                                </div>
                                <div className="order-detail-row">
                                    <div className="left">Discount</div>
                                    <div className="center">10%</div>
                                    <div className="mid">:</div>
                                    <div className="right">-$10</div>
                                </div>
                                <div className="order-detail-row">
                                    <div className="left">Tax</div>
                                    <div className="center">10%</div>
                                    <div className="mid">:</div>
                                    <div className="right">+₹10</div>
                                </div>
                                <div className="sw-cart-order-total-seprator"></div>
                                <div className="order-detail-row-total">
                                    <div className="left">Total</div>
                                    
                                    <div className="right">₹200</div>
                                </div>
                            </div>
                        </div>
                        <div className="sw-cart-apply-coupan">
                            <div className="sw-cart-apply-coupan-heading">Have a Coupan Code?</div>
                            <form className="sw-cart-coupan" >
                                <input type="text"></input>
                                <button style={{ borderRadius: "0px 10px 10px 0px" }} onClick={this.navigateResult}>Apply</button>
                            </form>

                        </div>
                    </div>

                </div>
                <div className="sw-cart-section">
                    <div className="sw-cartPage-heading">Items in Wishlist</div>
                    <div className="sw-cartPage-content">
                        <div className="sw-cartPage-card">
                            <div className="sw-cartPage-card-left">
                                <img src={Img}></img>
                            </div>
                            <div className="sw-cartPage-card-right">
                                <div>
                                    <div className="sw-cartPage-card-right-name">A Greeting Card</div>
                                    <div className="sw-cartPage-card-right-price">₹100</div>
                                    <div className="sw-cartPage-card-right-button-box">
                                        <div className="sw-cartPage-card-right-cart">Move to Cart</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sw-cartPage-card">
                            <div className="sw-cartPage-card-left">
                                <img src={Img}></img>
                            </div>
                            <div className="sw-cartPage-card-right">
                                <div>
                                    <div className="sw-cartPage-card-right-name">A Greeting Card</div>
                                    <div className="sw-cartPage-card-right-price">₹100</div>
                                    <div className="sw-cartPage-card-right-button-box">
                                        <div className="sw-cartPage-card-right-cart">Move to Cart</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



                <FooterDetail />
                <div className="sw-clearspace"></div>

            </div>
        );
    }
}
export default Cart;