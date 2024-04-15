import React from "react";
import "./footer.css";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaWhatsappSquare,
  FaWhatsapp,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => (
  <div className="footer">
    <div className="footer-header">
      <div className="footer-header-item">
        <h1>ABOUT AFRIKAN ACCENT</h1>
        <span>
          Afrikan Accent Adventures manages travel options across East and
          Southern Africa.We offer tailor-made safaris that aptly accommodate
          your interests, budget and occasion.
        </span>
      </div>

      <div className="footer-header-item">
        <h1>TRAVEL GUIDES</h1>
        <ul>
          <li><Link to='/travel-guide-kenya'> Travel Guide – Kenya</Link></li>
          <li><Link to='/travel-guide-tanzania'>Travel Guide – Tanzania</Link></li>
          <li><Link to='/travel-guide-uganda'>Travel Guide – Uganda</Link></li>
          <li><Link to='/travel-guide-rwanda'>Travel Guide – Rwanda</Link></li>
          <li><Link to='/travel-guide-namibia'>Travel Guide – Namibia</Link></li>
          <li><Link to='/travel-guide-botswana'>Travel Guide – Botswana</Link></li>
          <li><Link to='/travel-guide-southafrica'>Travel Guide – South Africa</Link></li>
        </ul>
      </div>

      <div className="footer-header-item">
        <h1>OFFICE HOURS</h1>
        <ul>
          <li>Monday – Friday: — 9:00 am – 6:00 pm</li>
          <li>Saturday: ————- 9:00 am – 4:00 pm</li>
          <li>Sunday —————- Closed</li>
        </ul>
      </div>
      <div className="footer-header-item">
        <h1>CONTACT INFO</h1>
        <ul>
          <li>Venus Complex, Northern By-pass</li>
          <li>Safaricom: +254748118818</li>
          <li>Airtel: +254782247247</li>
          <li>Telkom: 0202001410</li>
          <li>booking@afrikanaccentadventures.com</li>
          <li>www.afrikanaccentadventures.com</li>
        </ul>
      </div>
      <div className="footer-header-item">
        <h1>SUBSCRIBE TO OUR NEWSLETTER.</h1>
        <input type="text" placeholder="Enter your email" />{" "}
        <button>Subscribe</button>
      </div>

      <div className="review-info">
        <h1>What they say about us.</h1>
        <div className="review-container">
          <div className="review-item">
         

            <div className="review">
              <a href="https://www.tripadvisor.com/UserReviewEdit-g294207-d20871189-AA_Adventures-Nairobi.html?ReviewTitle=&qid10=0">
                <img
                  src="https://res.cloudinary.com/dap91fhxh/image/upload/v1677880655/trip-advisor_viuhlg.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="review-item">
           
            <div className="review">
              <a href="https://www.safaribookings.com/reviews/p3146">
                <img
                  src="https://res.cloudinary.com/dap91fhxh/image/upload/v1677880682/safari_bookings_vyskvg.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="review-item">
         

            <div className="review">
              <a href="https://www.touristlink.com/user/hellen-ombima.html?sereferer=0A8559F9">
                <img
                  src="https://res.cloudinary.com/dap91fhxh/image/upload/v1705069714/tourbadge_u2gcjo.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="social">
      <a href="https://www.facebook.com/afrikanadven/">
        <FaFacebook className="social-icon" />
      </a>
      <a href="https://twitter.com/AfrikanAdven" target="_blank">
        <FaTwitter className="social-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/afrikan-accent-adventures-4bbb88128?trk=nav_responsive_tab_profile"
        target="_blank"
      >
        {" "}
        <FaLinkedin className="social-icon" />
      </a>
      <a
        href="https://www.instagram.com/afrikanaccentadventures/?hl=en"
        target="_blank"
      >
        <FaInstagramSquare className="social-icon" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCJFk_CNUC5nm-ElGhwJ7_Gg"
        target="_blank"
      >
        {" "}
        <FaYoutube className="social-icon" />
      </a>
      <a href="https://wa.me/254711417516">
      <FaWhatsapp className="social-icon" />
      </a>
    </div>

    <div className="madeby">
      <div className="details">
        <span>
          {" "}
          &copy; 2024 Afrikan Accent Adventures| All rights reserved{" "}
          <Link to="/policy">Terms & Conditions | Privacy policy</Link>
          Design By James
        </span>
        <img
          src="data:image/jpeg;base64,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"
          alt="payment-logo-sprite-4-1"
        ></img>
      </div>
    </div>
  </div>
);

export default Footer;
