import React from 'react'
import Img from '../img/card.jpeg';

import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import FooterDetail from './FooterDetail';

class CartAddress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayInfo: false,
            displayForm:false,
        }
    };
    toggleInfo = () => {
        this.setState({ displayInfo: !this.state.displayInfo });
    }
    toggleForm = () => {
        this.setState({ displayForm: !this.state.displayForm});
    }
    back = () => {
        window.history.go(-1)

        
    }
    render() {
        return (
            <div className="sw-cartPage">
                <div className="sw-clearspace" style={{ background: "#fff", position: "fixed", top: "0", left: "0", zIndex: "1", width: "100%", height: "54px" }}></div>
                <div className="sw-clearspace"></div>
                <div className="sw-cartPage-header">
                    <div className="sw-logo" onClick={this.back}><i class="fas fa-chevron-left" style={{ "fontSize": "0.8em" }} onClick={this.back}></i> Swaran</div>
                    <div className="sw-head-icon-container">
                        <i class="fas fa-search"></i>

                        <i class="fas fa-user"></i>

                    </div>
                </div>

                <div className="sw-cart-section">
                    <div className="sw-cartPage-heading">Tell us which doors to knock</div>
                    <div className="sw-cartPage-content">
                        <div className="sw-cartPage-card">
                            <div className="sw-cartPage-card-left">
                                <img src={Img}></img>
                            </div>
                            <div className="sw-cartPage-card-right">
                                <div>
                                    <div className="sw-cartPage-card-right-name">A Greeting Card</div>
                                    <div className={"sw-cartPage-card-right-addFlag" + " " + "not-linked" + " " + "addFlag-hide"}><i class="fas fa-exclamation-circle"></i>Address not linked</div>
                                    <div className={"sw-cartPage-card-right-addFlag" + " " + "linked"}><i class="fas fa-check-circle"></i>Delivery to Harshit, Varanasi</div>
                                    <div className="sw-cartPage-card-right-button-box">
                                        <div className="sw-cartPage-card-right-cart" onClick={this.toggleInfo}>Link Address</div>
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
                                    <div className={"sw-cartPage-card-right-addFlag" + " " + "not-linked"}><i class="fas fa-exclamation-circle"></i>Address not linked</div>
                                    <div className={"sw-cartPage-card-right-addFlag" + " " + "linked" + " " + "addFlag-hide"}><i class="fas fa-check-circle"></i>We will send this to Harshit,Varanasi</div>
                                    <div className="sw-cartPage-card-right-button-box">
                                        <div className="sw-cartPage-card-right-cart">Link Address</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="sw-result-slider-card-info" style={this.state.displayInfo ? { display: "block" } : { display: "none" }}>
                    <div className="sw-result-slider-card-info-close" onClick={this.toggleInfo}>
                        <i class="fas fa-times-circle"></i>
                    </div>

                    <div className="sw-result-info-add-cart-btn">
                        <div className="add-to-cart" onClick={this.toggleForm}>Add New Address</div>

                    </div>
                    <form className="sw-result-address" style={this.state.displayForm ? { display: "block" } : { display: "none" }}>
                        <input type="text" placeholder="Name"></input>
                        <input type="text" placeholder="Mobile No."></input>
                        <div className="form-group">
                            <input type="text" placeholder="PinCode"></input>
                            <input type="text" placeholder="State"></input>
                        </div>

                        <input type="text" placeholder="Address Line 1"></input>
                        <input type="text" placeholder="Address Line 2"></input>
                        <input type="text" placeholder="Address Line 3"></input>
                        <input type="text" placeholder="Landmark"></input>
                        <div className="sw-result-info-add-cart-btn"><div className="add-to-cart">Save & Link</div></div>
                    </form>
                    <div className="sw-cart-order-total-seprator"></div>

                    <div className="sw-cart-address-list-box">
                        <div className="sw-cust-address-item">
                            <div className="sw-cust-address-item-left">
                                <div className="sw-cust-address-list-name">Harshit</div>
                                <div className="sw-cust-address-list-detail">Mob:9999999919</div>
                                <div className="sw-cust-address-list-detail">Back Street, Down</div>
                                <div className="sw-cust-address-list-detail">Varanasi, Uttar Pradesh</div>
                            </div>
                            <div className="sw-cust-address-item-right">
                                <div className="sw-cust-address-item-btn">Link</div>
                                <div className="sw-cust-address-item-btn" onClick={this.toggleForm}><i class="fas fa-edit"></i></div>
                            </div>

                        </div>

                        <div className="sw-cust-address-item">
                            <div className="sw-cust-address-item-left">
                                <div className="sw-cust-address-list-name">Harshit</div>
                                <div className="sw-cust-address-list-detail">Mob:999999719</div>
                                <div className="sw-cust-address-list-detail">Down the lane</div>
                                <div className="sw-cust-address-list-detail">Varanasi, Uttar Pradesh</div>
                            </div>
                            <div className="sw-cust-address-item-right">
                                <div className="sw-cust-address-item-btn">Link</div>
                                <div className="sw-cust-address-item-btn" onClick={this.toggleForm}><i class="fas fa-edit"></i></div>
                            </div>

                        </div>

                        <div className="sw-cust-address-item">
                            <div className="sw-cust-address-item-left">
                                <div className="sw-cust-address-list-name">Harshit</div>
                                <div className="sw-cust-address-list-detail">Mob:999999719</div>
                                <div className="sw-cust-address-list-detail">Down the Lane</div>
                                <div className="sw-cust-address-list-detail">Varanasi, Uttar Pradesh</div>
                            </div>
                            <div className="sw-cust-address-item-right">
                                <div className="sw-cust-address-item-btn">Link</div>
                                <div className="sw-cust-address-item-btn"><i class="fas fa-edit"></i></div>
                            </div>

                        </div>

                        <div className="sw-cust-address-item">
                            <div className="sw-cust-address-item-left">
                                <div className="sw-cust-address-list-name">Harshit</div>
                                <div className="sw-cust-address-list-detail">Mob:9999999719</div>
                                <div className="sw-cust-address-list-detail">Down the Lane</div>
                                <div className="sw-cust-address-list-detail">Varanasi, Uttar Pradesh</div>
                            </div>
                            <div className="sw-cust-address-item-right">
                                <div className="sw-cust-address-item-btn">Link</div>
                                <div className="sw-cust-address-item-btn"><i class="fas fa-edit"></i></div>
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
export default CartAddress;