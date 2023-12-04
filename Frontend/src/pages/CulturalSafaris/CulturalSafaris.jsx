import React,{useEffect,useState} from 'react';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import "./culturalSafaris.css";
import { publicRequest } from '../../requestMethods';

const CulturalSafaris = () => {
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
    <div className="cultural-safaris">
      <Navbar />

      <div className="cultural-safaris-section">
        <div className="cultural-safaris-background">
          <div className="cultural-safaris-title">
            <h1>Cultural Safaris</h1>
          </div>
        </div>

        <div className="cultural-safaris-desc">
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

export default CulturalSafaris;
