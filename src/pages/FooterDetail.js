import React from 'react'

class FooterDetail extends React.Component {

    render() {
        return (

            <div className="sw-footer-detail">
                <div className="sw-footer-detail-follow">Follow Us</div>
                <div className="sw-footer-detail-social">
                <i class="fab fa-instagram-square"></i>
                    <i class="fab fa-youtube"></i>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                </div>
                <div className="sw-h-divider"></div>

                <div className="sw-footer-detail-follow">Quick Links</div>
                <div className="sw-footer-detail-link">
                    <ul className="sw-footer-detail-link-ul">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Bulk Orders</li>
                        <li>FAQ</li>
                        <li>Cancelation Policy</li>
                        <li>Customer Support(9am - 8pm)</li>

                    </ul>
                    <div className="sw-logo">Cards</div>
                </div>
                <div className="sw-h-divider"></div>
                <div className="sw-footer-detail-copy">Copyrights <i class="fas fa-copyright"></i> 2021<br/>All rights Reserved with HKA<br/>Made with <i class="fas fa-heart"></i> in India</div>
            </div>

        );
    }
}
export default FooterDetail;