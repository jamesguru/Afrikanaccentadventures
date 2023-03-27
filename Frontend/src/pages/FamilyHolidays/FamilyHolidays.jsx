import React from 'react';
import './familyholidays.css'
import {Link} from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const FamilyHolidays = () => {
  return (
    <div className="family-holidays">
      <Navbar/>

      <div className="family-holidays-section">
        <div className="family-holidays-background">
          <div className="family-holidays-title">
            <h1>Family Holidays</h1>
          </div>
        </div>

        <div className="family-holidays-desc">
          <span>
            Nothing says Africa with more affirmation than her own people and
            the diverse traditions that serve them. With a rapid 'invasion' of
            modernity, it has become such a unique and rare experience to learn
            and enjoy first-hand the fascinating yet enthralling traditions and
            cultures of the African people. Afrikan Accent Adventures offers
            cultural safaris that will enable you the rare opportunity to
            interact with the very best of African culture in its unspoilt
            ambiance.
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
  )
}

export default FamilyHolidays