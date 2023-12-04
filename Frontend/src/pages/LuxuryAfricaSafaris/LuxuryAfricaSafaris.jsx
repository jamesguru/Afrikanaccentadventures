import React,{useEffect,useState} from 'react';
import { publicRequest } from '../../requestMethods';

import Navbar from "../../components/navbar/Navbar";
import "./luxuryafricasafaris.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const LuxuryAfricaSafaris = () => {
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

export default LuxuryAfricaSafaris;
