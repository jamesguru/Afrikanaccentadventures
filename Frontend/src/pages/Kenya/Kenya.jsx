import React, { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./kenya.css";
import { FaClock, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Kenya = () => {
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
    <div className="kenya">
      <Navbar />

      <div className="kenya-background">
        <div className="kenya-title">
          <h1>Kenya</h1>
        </div>
      </div>

      <div className="about-kenya">
        <span>
          Kenya boasts the most spectacular stretch of the Great Rift Valley,
          mighty Mt Kenya and the stunning savannah plains of the Masai Mara,
          Lake Nakuru with its flock of pink flamingos and a pristine Indian
          Ocean coast. An undoubted highlight is Kenya's premier game reserve,
          the Masai Mara. Earning its name from the Masai tribes people and the
          Mara River which divides it, the reserve is famous for its exceptional
          population of game and the annual Great Migration of the wildebeest
          between August and October each year. The Masai Mara is perhaps most
          famous for its lions, though all the other members of the Big 5 roam
          the reserve too. Kenya is a classic African destination with
          incredible safari opportunities and many highlights. To compliment
          this we offer a range of travel styles from adventurous overland
          camping trips to lodge accommodated safaris as well as tailor-made
          holidays. General Information About Kenya Our safaris in Kenya cover
          some of Africa's finest national parks including the Masai Mara and
          Lake Nakuru. All our safaris are led by experienced and passionate
          multilingual driver-guides who have travelled extensively throughout
          the region and have the first-hand knowledge and skills to ensure you
          have a memorable and hassle-free holiday. Our tours include an airport
          arrival transfer, many of your meals, game drives, and guiding - and
          at the end of your adventure you're bound to find yourself sharing
          tales of your travels over a cool Tusker beer with fellow travellers
          in Nairobi. Kenya has diverse attractions to offer to our visitors. It
          is only a few countries around the world where one can relax on
          pristine sandy beaches and be able to see wildlife in all forms within
          a short distance. Kenya has 60 National Parks and Reserves all with
          abundant wildlife. The spectacular wildebeest migration that occurs
          every year in Kenya's most visited Maasai Mara National Reserve is
          referred to as the 7th new wonder of the world.
        </span>
      </div>

      <div className="tours-kenya">
        <h2 className="kenya-tour-header">Tours in Kenya</h2>
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

export default Kenya;
