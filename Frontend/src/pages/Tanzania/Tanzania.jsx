import React,{useEffect,useState} from 'react';
import { publicRequest } from '../../requestMethods';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./tanzania.css";
import { FaClock, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Tanzania = () => {
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
          <h1>Tanzania</h1>
        </div>
      </div>

      <div className="about-tanzania">
        <span>
          Tanzania is a country of outstanding natural beauty, wonderful
          wildlife and rich culture, with over 120 tribal groups. For many it's
          the ultimate safari country, which is not surprising for a country
          that has more land devoted to national parks than any other wildlife
          destination, covering an incredible 33,660 km and including the
          UNESCO-listed Serengeti, the setting for the famed wildebeest
          migration and Ngorongoro Crater, a vast volcanic crater ring, teeming
          with animals. Tanzania is also home to Mt Kilimanjaro, the world's
          tallest free-standing mountain and Zanzibar, an idyllic tropical
          getaway, ideal for some blissful beach time. GENERAL INFORMATION For a
          little extra comfort whilst on safari in Tanzania our lodge
          accommodated trips, which have a maximum group size of 6, may be just
          the ticket. Staying in a variety of standard to mid-range lodges and
          tented chalets set within beautiful surroundings, youâ€™ll be
          accompanied by a knowledgeable and experienced guide and enjoy game
          drives in comfortable safari vehicles. With the flexibility to depart
          on any day of the year and handpick your choice of accommodation, our
          safari holidays in Tanzania are a great option for those looking for
          something a little more exclusive. Visit Tanzania's famed national
          parks, or combine safari and beach with some rest and relaxation on
          the beaches of Zanzibar.
        </span>
      </div>

      <div className="tours-tanzania">
        <h2 className="tanzania-tour-header">Tours in Tanzania</h2>
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

export default Tanzania;
