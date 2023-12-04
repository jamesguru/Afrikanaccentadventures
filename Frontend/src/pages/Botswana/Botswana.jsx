import React,{useEffect,useState} from 'react';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { FaClock, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { publicRequest } from '../../requestMethods';

const Botswana = () => {

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
          <h1>Botswana</h1>
        </div>
      </div>

      <div className="about-tanzania">
        <span>
          Beautiful Botswana - a land of untamed wilderness, spectacular
          landscapes and dramatic natural contrast, from the endless stretches
          of Kalahari Desert and the shimmering salt pans of Makgadikgadi, to
          the Okavango Delta’s labyrinth of waterways, carpeted with lilies and
          Chobe National Park with its abundance of wildlife.
        </span>
      </div>

      <div className="tours-tanzania">
        <h2 className="tanzania-tour-header">Tours in Botswana</h2>
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

export default Botswana;
