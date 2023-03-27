import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";

import { FaClock, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Namibia = () => {
  return (
    <div className="tanzania">
      <Navbar />

      <div className="tanzania-background">
        <div className="tanzania-title">
          <h1>Namibia</h1>
        </div>
      </div>

      <div className="about-tanzania">
        <span>
          Discover giant sand dunes, explore the surreal Petrified Forest, go on
          game drives in Etosha National Park, visit the Cheetah Conservation
          Foundation at Otjiwarongo and spot the black rhino - you'll get to do
          all this a more on our lodge accommodated safaris to Namibia. With
          itineraries to Namibia as well mult-country trips to neighbouring
          Botwana, Zimbabwe and South Africa, these small group safaris use 3-4
          star standard lodges and tented chalets and travel by road is done by
          private European standard transportation.
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

export default Namibia;
