import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./luxuryafricasafaris.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const LuxuryAfricaSafaris = () => {
  return (
    <div className="luxury-africa-safaris">
      <Navbar />

      <div className="luxury-africa-safaris-section">
        <div className="luxury-africa-safaris-background">
          <div className="luxury-africa-safaris-title">
            <h1>Luxury Africa Safaris</h1>
          </div>
        </div>

        <div className="luxury-africa-safaris-desc">
          <span>
            Afrikan Accent has a knack to cater to travelers who appreciate the
            finer things in life. From lavish accommodations, exquisite dining
            options, personal and attentive service to a rich offering of
            recommended sights, cultural experiences and flexibility to indulge
            in personal leisure time. We will ensure that everything meets and
            surpasses your expectations. Most importantly we will deliver in
            ensuring good location, good hosting, good experience and good
            guiding throughout your holiday.
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

export default LuxuryAfricaSafaris;
