import React from "react";
import './styles/Footer.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="accounts">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://in.linkedin.com/company/iic-nitt" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://chat.whatsapp.com/EDkRyIlEgmvFmAyWFNGcxQ?mode=ac_t" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/iic.nitt?igsh=MWZsMXlzdGU2cjhwMQ==" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="contacts">
          <h3>Contact Information</h3>
          <p><FaMapMarkerAlt /> NIT Trichy</p>
          <p><FaPhoneAlt /> +91 88888 92035</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Genesis - All Rights Reserved</p>
        <p>Made by IIC WebOps Team</p>
      </div>
    </footer>
  );
};

export default Footer;

