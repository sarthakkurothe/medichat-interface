import React from 'react';
import './footer.css';

const Footer = () => (
    <div className="gpt3__footer section__padding">
        <div className="gpt3__footer-heading">
            <h1 className="gradient__text">Do you want to step into the future ahead of the rest ?</h1>
        </div>

        <div className="gpt3__footer-btn">
            <p>Request Early Access</p>
        </div>

        <div className="gpt3__footer-links">
            <div className="gpt3__footer-links_logo">
                <p>Copyright © 2024 - All rights reserved.</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Links</h4>
                <p>Our stories</p>
                <p>Social Media</p>
                <p>Contact Us</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>About Us</h4>
                <p>Terms & Conditions </p>
                <p>Privacy Policy</p>
                <p>Careers</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Get in touch</h4>
                <p>+91-XXXXXXXXX</p>
                <p>sample@medichat.com</p>
            </div>
        </div>
    </div>
);

export default Footer;
