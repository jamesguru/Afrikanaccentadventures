import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./tanzania.css";
import { FaClock, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Tanzania = () => {
  return (
    <div className="tanzania">
      <Navbar />

      <div className="tanzania-background">
        <div className="tanzania-title">
          <h1>Tanzania</h1>
        </div>
      </div>

      <div className="about-tanzania">
        <span>
          Tanzania is a country of outstanding natural beauty, wonderful
          wildlife and rich culture, with over 120 tribal groups. For many it's
          the ultimate safari country, which is not surprising for a country
          that has more land devoted to national parks than any other wildlife
          destination, covering an incredible 33,660 km and including the
          UNESCO-listed Serengeti, the setting for the famed wildebeest
          migration and Ngorongoro Crater, a vast volcanic crater ring, teeming
          with animals. Tanzania is also home to Mt Kilimanjaro, the world's
          tallest free-standing mountain and Zanzibar, an idyllic tropical
          getaway, ideal for some blissful beach time. GENERAL INFORMATION For a
          little extra comfort whilst on safari in Tanzania our lodge
          accommodated trips, which have a maximum group size of 6, may be just
          the ticket. Staying in a variety of standard to mid-range lodges and
          tented chalets set within beautiful surroundings, youâ€™ll be
          accompanied by a knowledgeable and experienced guide and enjoy game
          drives in comfortable safari vehicles. With the flexibility to depart
          on any day of the year and handpick your choice of accommodation, our
          safari holidays in Tanzania are a great option for those looking for
          something a little more exclusive. Visit Tanzania's famed national
          parks, or combine safari and beach with some rest and relaxation on
          the beaches of Zanzibar.
        </span>
      </div>

      <div className="tours-tanzania">
        <h2 className="tanzania-tour-header">Tours in Tanzania</h2>
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
              Son agreed others exeter period myself few yet nature. Mention mr
              manners opinion.
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
              Son agreed others exeter period myself few yet nature. Mention mr
              manners opinion.
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
              Son agreed others exeter period myself few yet nature. Mention mr
              manners opinion.
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
              Son agreed others exeter period myself few yet nature. Mention mr
              manners opinion.
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
              Son agreed others exeter period myself few yet nature. Mention mr
              manners opinion.
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
              Son agreed others exeter period myself few yet nature. Mention mr
              manners opinion.
            </span>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tanzania;
