import React,{useEffect,useState} from 'react';
import { publicRequest } from '../../requestMethods';
import "./gorillatrekking.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const GorillaTrekking = () => {
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
    <div className="gorilla-trekking">
      <Navbar />

      <div className="gorilla-trekking-section">
        <div className="gorilla-trekking-background">
          <div className="gorilla-trekking-title">
            <h1>Gorilla Trekking</h1>
          </div>
        </div>

        <div className="gorilla-trekking-desc">
          <span>
            Gorilla trekking involves hiking through difficult terrain, thick
            vegetation, water bodies, hills and valleys. The activity can be
            very challenging and strenuous leaving one exhausted and with sore
            knee especially if they are not used to walking for long hours.
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

export default GorillaTrekking;
