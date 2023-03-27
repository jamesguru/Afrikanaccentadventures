import React from "react";
import Navbar from "../../components/navbar/Navbar";

import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const FlyInSafaris = () => {
  return (
    <div className="luxury-africa-safaris">
      <Navbar />

      <div className="luxury-africa-safaris-section">
        <div className="luxury-africa-safaris-background">
          <div className="luxury-africa-safaris-title">
            <h1>Fly In Safaris</h1>
          </div>
        </div>

        <div className="luxury-africa-safaris-desc">
          <span>
            A fly in safari by light aircraft is the way to go for quicker
            journey times and the chance to spot wildlife from the air - an
            incredible experience! Why not combine a couple of national parks by
            air for a truly special safari?
          </span>
        </div>
        <div className="package-body">
          <div className="package-item">
            <div className="package-container">
              <img
                src="	https://themes.waituk.com/entrada-modern/wp-content/uploads/sites/7/2016/05/tour-featured-04.jpg"
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
                src="	https://themes.waituk.com/entrada-modern/wp-content/uploads/sites/7/2016/05/tour-featured-04.jpg"
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
                src="	https://themes.waituk.com/entrada-modern/wp-content/uploads/sites/7/2016/05/tour-featured-04.jpg"
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

export default FlyInSafaris;
