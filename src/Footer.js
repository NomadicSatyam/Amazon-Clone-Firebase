import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <footer className="amazon-footer">
      <div className="footer-links">
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Press Releases</a>
        <a href="#">Amazon Cares</a>
        <a href="#">Gift a Smile</a>
      </div>
      <div className="social-links">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
      <div className="legal-links">
        <a href="#">Conditions of Use & Sale</a>
        <a href="#">Privacy Notice</a>
        <a href="#">Interest-Based Ads</a>
        <a href="#">© 2023 Amazon.com, Inc. or its affiliates</a>
      </div>
    </footer>
  );
}

export default Footer;
