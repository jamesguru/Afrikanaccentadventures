import React,{useEffect,useState} from 'react';
import { publicRequest } from '../../requestMethods';
import "./groupholidays.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
const GroupHolidays = () => {
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
    <div className="group-holidays">
      <Navbar />

      <div className="group-holidays-section">
        <div className="group-holidays-background">
          <div className="group-holidays-title">
            <h1>Group Holidays</h1>
          </div>
        </div>

        <div className="group-holidays-desc">
          <span>
            Are you and your friends planning a coastal getaway to reawaken
            dampen spirits in style; or maybe you would like to take the family
            on a holiday getaway to the depths of Tsavo; or your company is
            planning a weekend retreat to a tropical paradise for team building
            purposes.
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

export default GroupHolidays;
