import "./package.css";

import { Link } from "react-router-dom";
import { publicRequest } from "../../requestMethods";
import { React, useEffect, useState } from "react";

const Package = () => {
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
    <div className="package">
      <h2 className="package-head"> Best Sellers</h2>

      <div className="package-body">
        {packages.slice(0, 6)?.map((item, index) => (
          <div className="package-item" key={index}>
            <Link to={`/package/${item._id}`}>
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
                <span>{item.overview}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <Link to="/safaris/nairobi">
        <div className="view">
          <button className="view-all">View All</button>
        </div>
      </Link>
    </div>
  );
};

export default Package;
