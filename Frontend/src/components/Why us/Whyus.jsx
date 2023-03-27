import React from "react";
import "./whyus.css";
import PetsRounded from "@material-ui/icons/PetsRounded";

const Whyus = () => {
  return (
    <div className="whyus">
      <div className="whyus-header">
        <h3>Why Book With Us!</h3>
        <span>
          We understand that sometimes plans change. That’s why, when you book
          with us you have the flexibility to change your travel plans – with
          assurance that you’ll have options to re-book when it suits you. As
          long as you notify us about changes to your travel plans at least 30
          days before your scheduled departure, you can pick new travel dates or
          an entirely different trip, with no change fees*.
        </span>
      </div>
      <div className="whyus-body">
        <div className="whyus-body-item">
          <div className="front-icon">
            <div className="foot">
              <PetsRounded className="foot-icon" />
            </div>
          </div>

          <div className="whyus-body-info">
            <h3>Flexible deposit</h3>
            <span>
              Cancel up to 30 days before departure*, and you can transfer your
              deposit to another trip or hold it on file.
            </span>
          </div>
        </div>
        <div className="whyus-body-item">
          <div className="front-icon">
            <div className="foot">
              <PetsRounded className="foot-icon" />
            </div>
          </div>

          <div className="whyus-body-info">
            <h3>No change fees</h3>
            <span>
              Change your travel plans up to 30 days before your departure and
              there’ll be no fees* to change trips.
            </span>
          </div>
        </div>
        <div className="whyus-body-item">
          <div className="front-icon">
            <div className="foot">
              <PetsRounded className="foot-icon" />
            </div>
          </div>

          <div className="whyus-body-info">
            <h3>Flexible payment</h3>
            <span>
              Lock in your trip with a deposit and then pay the rest in
              instalments whenever you like, with no interest or fees.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
