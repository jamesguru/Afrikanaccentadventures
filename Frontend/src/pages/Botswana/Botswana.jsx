import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";

import { FaClock, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Botswana = () => {
  return (
    <div className="tanzania">
      <Navbar />

      <div className="tanzania-background">
        <div className="tanzania-title">
          <h1>Botswana</h1>
        </div>
      </div>

      <div className="about-tanzania">
        <span>
          Beautiful Botswana - a land of untamed wilderness, spectacular
          landscapes and dramatic natural contrast, from the endless stretches
          of Kalahari Desert and the shimmering salt pans of Makgadikgadi, to
          the Okavango Delta’s labyrinth of waterways, carpeted with lilies and
          Chobe National Park with its abundance of wildlife.
        </span>
      </div>

      <div className="tours-tanzania">
        <h2 className="tanzania-tour-header">Tours in Botswana</h2>
        <div className="package-body">
      
          <div className="package-item">
            <div className="package-container">
              <img
                src="https://res.cloudinary.com/dap91fhxh/image/upload/v1677758073/boat-in-the-sea_q9c27c.jpg"
                alt=""
              />

              <div className="package-duration">2 days</div>
              <div className="package-info">
                <div className="package-info-button">
                  <span>from $88 Per person.</span>
                  <Link to="/package/details">
                    <button className="package-expore">Explore</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="package-desc">
              <h2>Hiking Trip to Mountain</h2>
              <span>
                Son agreed others exeter period myself few yet nature. Mention
                mr manners opinion.
              </span>
            </div>
          </div>
          <div className="package-item">
            <div className="package-container">
              <img
                src="https://res.cloudinary.com/dap91fhxh/image/upload/v1677758073/boat-in-the-sea_q9c27c.jpg"
                alt=""
              />

              <div className="package-duration">2 days</div>

              <div className="package-info">
                <div className="package-info-button">
                  <span>from $88 Per person.</span>

                  <Link to="/package/details">
                    <button className="package-expore">Explore</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="package-desc">
              <h2>Hiking Trip to Mountain</h2>
              <span>
                Son agreed others exeter period myself few yet nature. Mention
                mr manners opinion.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Botswana;
