import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./rwanda.css";
import { FaClock, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Rwanda = () => {
  return (
    <div className="rwanda">
      <Navbar />

      <div className="rwanda-background">
        <div className="rwanda-title">
          <h1>Rwanda</h1>
        </div>
      </div>

      <div className="about-rwanda">
        <span>
          With so much choice we thought we'd put together a few good reasons
          why we feel that you should book your next safari through Afrikan
          Accent Adventures. We are passionate about creating tailor made
          itineraries to Eastern and Southern Africa.
        </span>
      </div>

      <div className="tours-rwanda">
        <h2 className="rwanda-tour-header">Tours in Rwanda</h2>
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

export default Rwanda;
