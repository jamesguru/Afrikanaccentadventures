import { Phone } from "@material-ui/icons";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <div className="contact-section">
        <div className="contact-background">
          <div className="contact-title">
            <h1>Contact us</h1>
          </div>
        </div>
      </div>

      <div className="contact-header">
        <div className="contact-desc">
          <h2>Get in Touch</h2>
          <span>Contact us by email, phone or through our web form below.</span>
        </div>

        <div className="contact-enquiry">
          <div className="contact-item">
            <div className="contact-telephone">
              <Phone className="contact-icon" />
              <span>+1- 770 835 -4608</span>
            </div>
            <h2>Booking Enquiries</h2>
          </div>
          <div className="contact-item">
            <div className="contact-telephone">
              <Phone className="contact-icon" />
              <span> +254-20-200-1410</span>
            </div>
            <h2>Post Booking Questions</h2>
          </div>
          <div className="contact-item">
            <div className="contact-telephone">
              <Phone className="contact-icon" />
              <span>+254-771-197-810</span>
            </div>
            <h2>Payment Queries</h2>
          </div>
        </div>
      </div>

      <div className="contact-form-map">
        <div className="contact-form">
          <label htmlFor="">First Name</label>
          <input type="text" />
          <label htmlFor="">Last Name</label>
          <input type="text" />
          <label htmlFor="">Email</label>
          <input type="text" />
          <label htmlFor="">Phone Number</label>
          <input type="number" />
          <label htmlFor="">Country</label>
          <input type="text" />
          <label htmlFor="">Message</label>
          <textarea></textarea>
          <button>Send Enquiry</button>
        </div>

        <div className="contact-map">
          <img
            src="https://pp.walk.sc/tile/e/0/748x600/loc/lat=-1.2087652/lng=36.8949418.png"
            alt=""
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
