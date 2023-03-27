import React from "react";
import "./groupholidays.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
const GroupHolidays = () => {
  return (
    <div className="group-holidays">
      <Navbar />

      <div className="group-holidays-section">
        <div className="group-holidays-background">
          <div className="group-holidays-title">
            <h1>Group Holidays</h1>
          </div>
        </div>

        <div className="group-holidays-desc">
          <span>
            Are you and your friends planning a coastal getaway to reawaken
            dampen spirits in style; or maybe you would like to take the family
            on a holiday getaway to the depths of Tsavo; or your company is
            planning a weekend retreat to a tropical paradise for team building
            purposes.
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

export default GroupHolidays;
