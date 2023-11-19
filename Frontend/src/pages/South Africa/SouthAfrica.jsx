import React,{useEffect,useState} from 'react';
import { publicRequest } from '../../requestMethods';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";

import { FaClock, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SouthAfrica = () => {
  
const [packages, setPackages] = useState([]);
useEffect(() => {
  const getPackages = async () => {
    try {
      const res = await publicRequest.get("/packages");
      setPackages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  getPackages();
}, []);

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
        {packages.map((item, index) => (
          <div className="package-item">
            <div className="package-container">
              <img src={item.img} alt={item.title} className="package-img"/>

              <div className="package-duration">{item.duration}</div>

              <div className="package-info">
                <div className="package-info-button">
                  <span>From ${item.originalPrice} Per person.</span>

                  <Link to={`/package/${item._id}`}>
                    <button className="package-expore">Explore</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="package-desc">
              <h2>{item.title}</h2>
              <span>
                Son agreed others exeter period myself few yet nature. Mention
                mr manners opinion.
              </span>
            </div>
          </div>
        ))}
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default SouthAfrica;
