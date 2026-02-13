import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__socials">
                {/* Icons could go here (FB, Insta, Twitter, YT) */}
            </div>

            <ul className="footer__links">
                <li><a href="#" className="footer__link">Audio Description</a></li>
                <li><a href="#" className="footer__link">Help Center</a></li>
                <li><a href="#" className="footer__link">Gift Cards</a></li>
                <li><a href="#" className="footer__link">Media Center</a></li>
                <li><a href="#" className="footer__link">Investor Relations</a></li>
                <li><a href="#" className="footer__link">Jobs</a></li>
                <li><a href="#" className="footer__link">Terms of Use</a></li>
                <li><a href="#" className="footer__link">Privacy</a></li>
                <li><a href="#" className="footer__link">Legal Notices</a></li>
                <li><a href="#" className="footer__link">Cookie Preferences</a></li>
                <li><a href="#" className="footer__link">Corporate Information</a></li>
                <li><a href="#" className="footer__link">Contact Us</a></li>
            </ul>

            <div className="footer__service-code">
                <button className="footer__service-code-btn">Service Code</button>
            </div>

            <div className="footer__copyright">
                &copy; 1997-2024 Netflix, Inc.
            </div>
        </div>
    );
}

export default Footer;
