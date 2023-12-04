import React,{useEffect,useState} from 'react';
import { publicRequest } from '../../requestMethods';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./rwanda.css";
import { FaClock, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Rwanda = () => {
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
    <div className="rwanda">
      <Navbar />

      <div className="rwanda-background">
        <div className="rwanda-title">
          <h1>Rwanda</h1>
        </div>
      </div>

      <div className="about-rwanda">
        <span>
          With so much choice we thought we'd put together a few good reasons
          why we feel that you should book your next safari through Afrikan
          Accent Adventures. We are passionate about creating tailor made
          itineraries to Eastern and Southern Africa.
        </span>
      </div>

      <div className="tours-rwanda">
        <h2 className="rwanda-tour-header">Tours in Rwanda</h2>
        
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
              {item.overview}
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

export default Rwanda;
