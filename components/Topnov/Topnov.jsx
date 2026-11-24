import React from "react";
import { Container } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Topnov.css";

const Topnov = () => {
  return (
    <div className="sd-topnav">
      <Container fluid="xl" className="sd-topnav-inner container">
        <div className="sd-topnav-details">
          <a href="tel:+61296154777">
            <FaPhoneAlt /> <span>+61 296 154 777</span>
          </a>
          <a href="https://wa.me/61489187775">
            <FaWhatsapp /> <span>+61 489 187 775</span>
          </a>
          <a href="mailto:enquiry@sydneystructuralsteel.com.au">
            <FaEnvelope /> <span>enquiry@sydneystructuralsteel.com.au</span>
          </a>
          <span className="sd-topnav-address">
            <FaMapMarkerAlt />
            <span>8 Harvey Rd, Kings Park NSW 2148, Australia</span>
          </span>
        </div>

        <div className="sd-topnav-socials">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="#" aria-label="X"><FaXTwitter /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </Container>
    </div>
  );
}
export default Topnov;