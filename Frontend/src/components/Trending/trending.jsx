import React from "react";
import "./trending.css";
import { Link } from "react-router-dom";

const trending = () => {
  return (
    <div className="treanding">
      <div className="treading-header">
        <h1>Trending</h1>
      </div>

      <div className="trending-body">
        <div className="trending-item">
          <Link to="/wheretogo">
            <img
              src="https://cdn.pixabay.com/photo/2018/01/06/23/25/snow-3066167_960_720.jpg"
              alt=""
            />
            <span className="trending-title">Mountain Biking Trip</span>
            <span className="trending-description">City Tours, Cycling, Urban</span>
            <span className="trending-pricing">Ksh 52000</span>
            <button className="btn-trending">Explore</button>
          </Link>
        </div>

        <div className="trending-item">
          <Link to="/wheretogo">
            <img
              src="https://cdn.pixabay.com/photo/2018/01/06/23/25/snow-3066167_960_720.jpg"
              alt=""
            />
            <span className="trending-title">Mountain Biking Trip</span>
            <span className="trending-description">City Tours, Cycling, Urban</span>
            <span className="trending-pricing">Ksh 52000</span>
            <button className="btn-trending">Explore</button>
          </Link>
        </div>

        <div className="trending-item">
          <Link to="/wheretogo">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/22/22/21/adventure-1850912__340.jpg"
              alt=""
            />
            <span className="trending-title">Bungee Jumping Trip</span>
            <span className="trending-description">Bungee Jump, Cycling, Desert</span>
            <span className="trending-pricing">Ksh 10500</span>
            <button className="btn-trending">Explore</button>
          </Link>
        </div>

        <div className="trending-item">
          <Link to="/wheretogo">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/18/19/39/backpack-1836594__340.jpg"
              alt=""
            />
            <span className="trending-title">City Tours in Europe</span>
            <span className="trending-description">Beach, Jungle, Mountain, Rural</span>
            <span className="trending-pricing">Ksh 8000</span>
            <button className="btn-trending">Explore</button>
          </Link>
        </div>

        <div className="trending-item">
          <Link to="/wheretogo">
            <img
              src="https://cdn.pixabay.com/photo/2013/04/18/14/39/ship-105596__340.jpg"
              alt=""
            />
            <span className="trending-title">City Tours in Europe</span>
            <span className="trending-description">Beach, Jungle, Mountain, Rural</span>
            <span className="trending-pricing">Ksh 7000</span>
            <button className="btn-trending">Explore</button>
          </Link>
        </div>

        <div className="trending-item">
          <Link>
            <img
              src="https://cdn.pixabay.com/photo/2020/04/22/20/05/wadi-rum-5079834_960_720.jpg"
              alt=""
            />
            <span className="trending-title">Mountain Biking Trip</span>
            <span className="trending-description">City Tours, Cycling, Urban</span>
            <span className="trending-pricing">Ksh 56000</span>
            <button className="btn-trending">Explore</button>
          </Link>
        </div>

        
      </div>
    </div>
  );
};

export default trending;
