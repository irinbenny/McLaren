/* eslint-disable no-unused-vars */
import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-part1">
        {/* Content for the first part of the footer */}
        <h6 className='titled'>McLAREN CORPORATE</h6>
        <div className="links-container">
          <div className="links-left">
            <p>Partners</p>
            <p>Careers</p>
            <p>Media</p>
          </div>
          <div className="links-right">
            <p>McLAREN Group</p>
            <p>McLAREN Applied</p>
            <p>McLAREN Racing</p>
          </div>
        </div>
        {/* Logo and additional links */}
        <div className="footer-part1-bottom">
          <img src="logo1.png" alt="Company Logo" className="company-logo" />
          <div className="additional-links">
            <p>COOKIE POLICY</p>
            <p>GENDER GAP REPORT</p>
            <p>PRIVACY POLICY</p>
            <p>TERMS AND CONDITIONS</p>
            <p>ANTI SALVERY STATEMENTS</p>
          </div>
        </div>
      </div>
      <div className="footer-part2">
        {/* Content for the second part of the footer */}
        <div className="contact">
          <h6>CONTACT</h6>
          <p>Contact Us</p>
          <p>Enquire</p>
          <p>Find a Retailer</p>
          <p>Roadside assistance</p>
          <p style={{ marginBottom: "50px" }}> </p> 
        </div>
        <div className="follow-us">
        <h6>FOLLOW US</h6>
        <div className="social-links">
            <div className="left-links">
            <p>Facebook</p>
            <p>Youtube</p>
            </div>
            <div className="right-links">
            <p>Instragram</p>
            <p>Twitter</p>
            </div>
        </div>
     </div>
      </div>
    </div>
  );
}

export default Footer;
