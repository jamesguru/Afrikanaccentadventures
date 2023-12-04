import React,{useEffect,useState} from 'react';
import { publicRequest } from '../../requestMethods';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./uganda.css";
import { FaClock, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Uganda = () => {
  
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
    <div className="uganda">
      <Navbar />

      <div className="uganda-background">
        <div className="uganda-title">
          <h1>Uganda</h1>
        </div>
      </div>

      <div className="about-uganda">
        <span>
          Uganda, 'The Pearl of Africa', is a country of striking beauty and
          home to the deepest crater lake in all of Africa, Lake Bunyoni. Its
          national parks and wildlife reserves boast over 300 species of mammal
          and more than 1000 species of birds, though Uganda's major attraction
          is the approximate 600 remaining mountain gorilla. You will need a
          gorilla permit to do the trek to see the gorillas, which we organise
          for you. The permits are vital in helping finance patrols that are
          responsible for protecting the gorillas from poachers.
        </span>
      </div>

      <div className="tours-kenya">
        <h2 className="kenya-tour-header">Tours in Uganda</h2>
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

export default Uganda;
