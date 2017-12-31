import React from 'react';

import './footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <p>Thanks for using our app!</p>
            <h5>Contact us: </h5>
            <ul className="footer__contacts">
                <li className="footer__contacts-item">
                    <a className="footer__contacts-link"
                       href="tel:+380661228671">+38 066 122 86 71</a>
                </li>
                <li className="footer__contacts-item">
                    <a className="footer__contacts-link"
                       href="mailto:minin.serhii@gmail.com">minin.serhii@gmail.com</a>
                </li>
            </ul>
        </div>
    </footer>
)

export default Footer;
