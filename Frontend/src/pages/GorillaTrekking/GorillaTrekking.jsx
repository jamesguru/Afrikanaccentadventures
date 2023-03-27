import React from "react";
import "./gorillatrekking.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const GorillaTrekking = () => {
  return (
    <div className="gorilla-trekking">
      <Navbar />

      <div className="gorilla-trekking-section">
        <div className="gorilla-trekking-background">
          <div className="gorilla-trekking-title">
            <h1>Gorilla Trekking</h1>
          </div>
        </div>

        <div className="gorilla-trekking-desc">
          <span>
            Gorilla trekking involves hiking through difficult terrain, thick
            vegetation, water bodies, hills and valleys. The activity can be
            very challenging and strenuous leaving one exhausted and with sore
            knee especially if they are not used to walking for long hours.
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

export default GorillaTrekking;
