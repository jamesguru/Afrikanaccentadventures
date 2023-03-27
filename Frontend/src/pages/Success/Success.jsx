import React from "react";
import "./success.css";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="success-page">
      <div className="order-success">
        <h2>Your safari has been created successfully.</h2>
        <h4>Check your email.</h4>
        <img src="images/success.png" alt="" />

        <button>
          <Link to="/">Back home</Link>
        </button>
      </div>
    </div>
  );
};

export default Success;
