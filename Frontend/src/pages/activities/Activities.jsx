import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import{Link} from 'react-router-dom'
import "./activities.css";

import { publicRequest } from "../../requestMethods";
const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const getActivities = async () => {
      try {
        const res = await publicRequest.get("/activities/");

        setActivities(res.data);

       
      } catch (error) {
        console.log(error);
      }
    };
    getActivities();
  }, []);
  return (
    <div className="activities">
      <Navbar />

      <div className="activities-background">
        <span className="activities-name">Some Of Our Activities</span>
      </div>

      <div className="activities-body">
        {activities?.map((activity, index) => (
          <>
            <div className="activity-item">
              <div className="activity-image">
                <img src={activity.img} alt="activity" />
              </div>

              <div className="activity-info">
                <span className="activity-header">{activity.title}</span>
                <span className="activity-overview">{activity.overview}</span>

                <Link to={`/activity/${activity._id}`}>
                <button className="activity-explore">Book now</button>
                </Link>
              </div>
            </div>
            <hr />
          </>
        ))}

        <button className="activity-viewall">View All</button>
      </div>
      <Footer />
    </div>
  );
};

export default Activities;
