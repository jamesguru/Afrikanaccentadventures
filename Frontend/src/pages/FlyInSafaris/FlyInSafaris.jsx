import Navbar from "../../components/navbar/Navbar";
import React, { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const FlyInSafaris = () => {
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
            <h1>Fly In Safaris</h1>
          </div>
        </div>

        <div className="luxury-africa-safaris-desc">
          <span>
            A fly in safari by light aircraft is the way to go for quicker
            journey times and the chance to spot wildlife from the air - an
            incredible experience! Why not combine a couple of national parks by
            air for a truly special safari?
          </span>
        </div>
        <div className="package-body">
          {packages.map((item, index) => (
            <div className="package-item">
              <div className="package-container">
                <img src={item.img} alt={item.title} className="package-img" />

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

export default FlyInSafaris;
