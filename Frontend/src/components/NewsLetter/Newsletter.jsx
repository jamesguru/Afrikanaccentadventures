import React, { useState, useEffect } from "react";
import "./newsletter.css";
import { FaPlane, FaPlaceOfWorship, FaClock, FaMountain } from "react-icons/fa";
import { publicRequest } from "../../requestMethods";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [close, setClose] = useState(false);
  const [packages, setPackages] = useState([]);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async () => {
    if (email) {
      try {
        await publicRequest.post("/newsletter/", { email });
        setClose(true)
      } catch (error) {
        setClose(false);
      }
    }
  };

  const handleClose = () => {
    setClose(false);
  };

  return (
    <div>
      <div className="newsletter">
        <div className="newsletter-detail">
          <h1 className="newleter-header">
            SUBSCRIBE TO OUR <span className="newsletter-span">NEWSLETTER</span>
          </h1>
          <span className="signup">
            Sign up to receive the best offers on promotion and coupons. Don’t
            worry! It’s not Spam
          </span>
          <div className="newsletter-input">
            <input type="text" onChange={handleChange} />
            <button onClick={handleSubscribe}>Subscribe</button>
          </div>
        </div>

        <div className="newsletter-card">
          <div className="newletter-card-item">
            <div className="newsletter-card-detail">
              <FaPlane className="newsletter-icon" />
              <h1>500+</h1>
              <span>Awesome Tour</span>
            </div>
          </div>

          <div className="newletter-card-item">
            <div className="newsletter-card-detail">
              <FaPlaceOfWorship className="newsletter-icon" />
              <h1>300+</h1>
              <span>New Destinations</span>
            </div>
          </div>

          <div className="newletter-card-item">
            <div className="newsletter-card-detail">
              <FaClock className="newsletter-icon" />
              <h1>10+</h1>
              <span>Years Experience</span>
            </div>
          </div>
          <div className="newletter-card-item">
            <div className="newsletter-card-detail">
              <FaMountain className="newsletter-icon" />
              <h1>500+</h1>
              <span>Best Mountains</span>
            </div>
          </div>
        </div>

        {close && (
          <div className="newsletter-success">
            <div className="success-item">
              <button onClick={handleClose}>close</button>

              <img src="images/success.png" alt="" />
              <h4>Thank you for sign up on our newsletter.</h4>
              <span>You will be able to receive every updates.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
