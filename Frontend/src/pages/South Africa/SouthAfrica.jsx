import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";

import { FaClock, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SouthAfrica = () => {
  return (
    <div className="tanzania">
      <Navbar />

      <div className="tanzania-background">
        <div className="tanzania-title">
          <h1>South Africa</h1>
        </div>
      </div>

      <div className="about-tanzania">
        <span>
          South Africa is marked by several distinct ecosystems. Kruger National
          Park is populated by big game. The Western Cape offers beaches, lush
          winelands around Stellenbosch and Paarl, craggy cliffs at the Cape of
          Good Hope, forest and lagoons along the Garden Route, and the city of
          Cape Town, beneath flat-topped Table Mountain.
        </span>
      </div>

      <div className="tours-tanzania">
        <h2 className="tanzania-tour-header">Tours in South Africa</h2>
        <div className="package-body">
          <div className="package-item">
            <div className="package-container">
              <img
                src="	https://res.cloudinary.com/dap91fhxh/image/upload/v1677758073/boat-in-the-sea_q9c27c.jpg"
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

export default SouthAfrica;
