import {
  InfoOutlined,
  PlayArrow,
  SearchRounded,
  SettingsInputAntennaTwoTone,
} from "@material-ui/icons";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import {
  FaSearch,
  FaSearchLocation,
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaWhatsapp,
  FaFileDownload,
} from "react-icons/fa";
import "./featured.css";
import { useState } from "react";
export default function Featured({ type }) {
  const transition = { duration: 8, type: "spring" };

  const [close, setClose] = useState(false);
  const [company, setCompany] = useState("");
  const [bronchure, setBronchure] = useState(false);
  const [companyName, setCompanyName] = useState("");

  const download = () => {
    setClose(!close);
  };

  const change = (event) => {
    const value = event.target.value;

    if (value === "agent") {
      setCompany(value);
    } else if (value === "tourist" || companyName.length > 2) {
      setBronchure(true);
    } else {
      setBronchure(false);
    }
  };

  const Company = (event) => {
    const value = event.target.value;
    setCompanyName(value);
  };

  return (
    <Carousel fade controls={false}>
      <Carousel.Item>
        <div className="slide-item"></div>

        <Carousel.Caption>
          <div className="slide-detail">
            <span className="slide-header">Where do you want to tour?</span>
            <div className="featured-search">
              <SearchRounded className="search-icon" />
              <input
                type="text"
                className="destination-search"
                placeholder="Search destination"
              />

              <button className="search-button">Search </button>
            </div>
            <span className="slide-header"></span>
            <div className="slide-buttons"></div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-item1"></div>

        <Carousel.Caption>
          <div className="slide-detail">
            <span className="slide-header">HOME OF BEAUTY SCENARIES</span>
            <span className="slide-header">KENYA</span>

            <div className="slide-buttons">
              <button className="take-tour">Go to shop</button>
              <button className="take-tour">Explore Kenya</button>

              <button className="take-tour">Discover Kenya</button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-item4"></div>

        <Carousel.Caption>
          <div className="slide-detail">
            <span className="slide-header">THE PEARL OF AFRICA</span>
            <span className="slide-header">UGANDA</span>

            <div className="slide-buttons">
              <button className="take-tour">Go to shop</button>
              <button className="take-tour">Explore Uganda</button>

              <button className="take-tour">View Uganda</button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-item5"></div>

        <Carousel.Caption>
          <div className="slide-detail">
            <span className="slide-header">THE ROOF OF AFRICA</span>
            <span className="slide-header">TANZANIA & ZANZIBAR</span>

            <div className="slide-buttons">
              <button className="take-tour">Go to shop</button>
              <button className="take-tour">Explore Tanzania</button>

              <button className="take-tour">View Tanzania</button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-item2"></div>

        <Carousel.Caption>
          <div className="slide-detail">
            <span className="slide-header">LAND OF THOUSAND HILLS</span>
            <span className="slide-header">RWANDA</span>

            <div className="slide-buttons">
              <button className="take-tour">Go to shop</button>
              <button className="take-tour">View Rwanda</button>

              <button className="take-tour">Discover Rwanda</button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-item6"></div>

        <Carousel.Caption>
          <div className="slide-detail">
            <span className="slide-header">THE LAND OF BRAVE</span>
            <span className="slide-header">NAMIMBIA</span>

            <div className="slide-buttons">
              <button className="take-tour">Go to shop</button>
              <button className="take-tour">Explore Namibia</button>

              <button className="take-tour">View Namimbia</button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-item8"></div>

        <Carousel.Caption>
          <div className="slide-detail">
            <span className="slide-header">LANDS OF GIANTS</span>
            <span className="slide-header">BOTSWANA</span>

            <div className="slide-buttons">
              <button className="take-tour">Go to shop</button>
              <button className="take-tour">Explore Botswana</button>

              <button className="take-tour">View Botswana</button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-item7"></div>

        <Carousel.Caption>
          <div className="slide-detail">
            <span className="slide-header">VICTORIA FALLS</span>
            <span className="slide-header">ZAMBIA & ZIMBABWE</span>

            <div className="slide-buttons">
              <button className="take-tour">Go to shop</button>
              <button className="take-tour">Explore Zambia</button>

              <button className="take-tour">View Zambia</button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="slide-item3"></div>

        <Carousel.Caption>
          <div className="slide-detail">
            <span className="slide-header">THE RAINBOW NATION</span>
            <span className="slide-header">SOUTH AFRICA</span>

            <div className="slide-buttons">
              <button className="take-tour">Go to shop</button>
              <button className="take-tour">Explore South Africa</button>

              <button className="take-tour">View South Africa</button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
