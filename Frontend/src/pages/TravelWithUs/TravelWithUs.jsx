import React from "react";
import "./TravelWithUs.css";
import PetsRounded from "@material-ui/icons/PetsRounded";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const TravelWithUs = () => {
  return (
    <div className="travelwithus">
      <NavBar />

      <div className="tanzania-background">
        <div className="travelwithus-title">
          <h1>Why Travel with us</h1>
        </div>
      </div>
      <div className="travelwithus-header">
        <h3>Why Travel With Us!</h3>
      </div>
      <div className="travelwithus-body">
        <div className="travelwithus-item">
          <div className="front-icon">
            <div className="foot">
              <PetsRounded className="foot-icon" />
            </div>
          </div>

          <div className="travelwithus-info">
            <h3>One Stop Shop</h3>
            <span>
              You can always count on our fully comprehensive travel solutions
              to cater for all your Safari needs. Enjoy our Wildlife Safaris,
              Business travel, Beach Holidays and much more. Our site offers you
              diverse tailor-made business and leisure Safari options to East
              and South African destinations. These include Kenya, Uganda,
              Tanzania, Zanzibar, Rwanda, South Africa and Namibia among others.
              Travel Products are tailor made for any leisure and adventure
              traveler. We proud ourselves to have increased our commitment and
              dedication by providing outstanding travel arrangements that offer
              our adventurers the thrill of knowing about Africa our homeland.
            </span>
          </div>
        </div>
        <div className="travelwithus-item">
          <div className="front-icon">
            <div className="foot">
              <PetsRounded className="foot-icon" />
            </div>
          </div>

          <div className="travelwithus-info">
            <h3>The `E` Factor</h3>
            <span>
              Excellence and Experience. This is the thing that makes us
              outshine from other competitors. Our dedication to excellence
              begins with our first discussion with you and proceeds with
              directly through to your return trip home. This covers the
              destinations we choose for you, with the perspectives we need for
              you, to the guides at every establishment and all the unique
              additional touches that we consolidate that sets a standard for
              our safaris.
            </span>
          </div>
        </div>
        <div className="travelwithus-item">
          <div className="front-icon">
            <div className="foot">
              <PetsRounded className="foot-icon" />
            </div>
          </div>

          <div className="travelwithus-info">
            <h3>Customized Safaris</h3>
            <span>
              We fully understand that travel is all about fulfilling dreams and
              creating memories. That is why at Afrikan Accent Adventures we
              assure that your travel experience is expertly handled. All of our
              clients have unique travel needs and requirements; hence the need
              for a tailor made experience. Trust us to offer you a different
              experience each time, so you can genuinely explore the unmatched
              rawness of the African continent.
            </span>
          </div>
        </div>
        <div className="travelwithus-item">
          <div className="front-icon">
            <div className="foot">
              <PetsRounded className="foot-icon" />
            </div>
          </div>

          <div className="travelwithus-info">
            <h3>Money Value</h3>
            <span>
              Value for money is the maxim that defines our daily operations. In
              this regard, we do not put a �mark up� on our prices but offer
              similar rates to those published by our partner accommodation
              properties. We regularly benchmark our prices against those of
              similar luxury tour operators to ensure that we remain cost
              competitive. Our itineraries are tailored to suit individual needs
              and budgets. To best guide you on what to expect at a particular
              destination, we ensure that a detailed itinerary and clear visuals
              are attached with each quote.
            </span>
          </div>
        </div>

        <div className="travelwithus-item">
          <div className="front-icon">
            <div className="foot">
              <PetsRounded className="foot-icon" />
            </div>
          </div>

          <div className="travelwithus-info">
            <h3>Experience</h3>
            <span>
              This for us is what it's truly about! We convey the finest
              experience that helps you Experience the difference!! We put all
              the efforts and increase levels for each safari and make it a
              voyage of a lifetime. Whether its camping underneath the stars and
              listening to natural life close within reach, enhancing your
              photography with an untamed life photographer or producer as your
              guide, or having a cookery lesson with chef or figuring out how to
              fly fish with an professional guide � for us, it is the general
              people you meet and the extraordinary encounters that you
              experience that marks the success of a safari!
            </span>
          </div>
        </div>
        <div className="travelwithus-item">
          <div className="front-icon">
            <div className="foot">
              <PetsRounded className="foot-icon" />
            </div>
          </div>

          <div className="travelwithus-info">
            <h3>Life Long Relationship</h3>
            <span>
              Value for money is the maxim that defines our daily operations. In
              this regard, we do not put a �mark up� on our prices but offer
              similar rates to those published by our partner accommodation
              properties. We regularly benchmark our prices against those of
              similar luxury tour operators to ensure that we remain cost
              competitive. Our itineraries are tailored to suit individual needs
              and budgets. To best guide you on what to expect at a particular
              destination, we ensure that a detailed itinerary and clear visuals
              are attached with each quote.
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TravelWithUs;
