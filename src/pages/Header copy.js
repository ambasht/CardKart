import React from 'react';
import { BrowserRouter as Router,Switch,Route,Link,useNavigate} from "react-router-dom";


class Header extends React.Component {
    

    back = () => {
        window.history.go(-1)

        
    }
    render() {
        var ifSearchActive = this.props.results;
        
        let header;
        if (ifSearchActive == 1) {
            header = <div className="sw-header">
                <div className="sw-header-box">
                    <div className="sw-logo" onClick={this.back}><i class="fas fa-chevron-left" style={{ "fontSize": "0.8em" }} onClick={this.back}></i> Cards</div>
                    <div className="sw-head-icon-container">
                        <i class="fas fa-heart" style={{ "fontSize": "0.8em", "display": "flex", "justifyContent": "center", "alignItems": "center", "color": "#FF4033" }}></i>
                        <div className="sw-cart">
                            <i class="fas fa-shopping-cart"></i>
                            <span className="badge">1</span>
                        </div>
                    </div>

                </div>
                <form className="sw-search">
                    <input type="text"></input>
                    <i class="fas fa-search"></i>
                </form>

            </div>;
        }
        else if (ifSearchActive == 2) {
            header = <div className="sw-result-header-nav">
                <div className="sw-result-header-button" onClick={this.back}>
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>

                </div>
                <div className="sw-result-header-button-right">
                    <div className="sw-result-btn-item">Checkout</div>
                    <div className="sw-cart">
                        <i class="fas fa-shopping-cart"></i>
                        <span className="badge">2</span>
                    </div>
                </div>
            </div>

        }
        else {
            header = <div className="sw-header">
                <div className="sw-header-box">
                    <div className="sw-logo">Swaran</div>
                    <div className="sw-cart">
                        <i class="fas fa-shopping-cart"></i>
                        <span className="badge">1</span>
                    </div>
                </div>
                <form className="sw-search">
                    <input type="text"></input>
                    <i class="fas fa-search"></i>
                </form>

            </div>;
        }

        return (

            <div>{header}</div>

        );
    }
}
export default Header;