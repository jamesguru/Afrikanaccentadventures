import React,{useEffect,useState} from 'react';
import { publicRequest } from '../../requestMethods';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";

import { FaClock, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Namibia = () => {
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
          <h1>Namibia</h1>
        </div>
      </div>

      <div className="about-tanzania">
        <span>
          Discover giant sand dunes, explore the surreal Petrified Forest, go on
          game drives in Etosha National Park, visit the Cheetah Conservation
          Foundation at Otjiwarongo and spot the black rhino - you'll get to do
          all this a more on our lodge accommodated safaris to Namibia. With
          itineraries to Namibia as well mult-country trips to neighbouring
          Botwana, Zimbabwe and South Africa, these small group safaris use 3-4
          star standard lodges and tented chalets and travel by road is done by
          private European standard transportation.
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

export default Namibia;
