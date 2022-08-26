import React from 'react';
import { BrowserRouter as Router,Switch,Route,Link,useNavigate} from "react-router-dom";


class Header extends React.Component {
    
    
    render() {
        var ifSearchActive = this.props.results;
        
        let header;
        
            header = <div className="sw-result-header-nav">
                <div className="sw-result-header-button" onClick={this.context.router.history.goBack}>
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>

                </div>
                <Link to={'/CardKart/cart'} className="sw-result-header-button-right">
                    <div className="sw-result-btn-item">Checkout</div>
                    <div className="sw-cart">
                        <i class="fas fa-shopping-cart"></i>
                        <span className="badge">2</span>
                    </div>
                </Link>
            </div>

        

        return (

            <div>{header}</div>

        );
    }
}
export default Header;