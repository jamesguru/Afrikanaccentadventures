import "./aboutus.css";

import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <div className="about">
      <Navbar />

      <div className="about-section">
        <div className="about-background">
          <div className="about-title">
            <h1>About us</h1>
          </div>
        </div>

        <div className="about-upper">
          <div className="about-video">
            <video src="videos/video.mp4" autoPlay loop controls muted></video>
          </div>

          <div className="about-text">
            <div className="about-header">
              <span className="black">
                About Afrikan Accent Adventures
                <span className="red">  Who We Are</span> , and what we Offer.
              </span>
            </div>

            <div className="about-stats">
              <div className="stats-item">
                <h1>10+</h1>
                <span>Years Experience</span>
              </div>

              <div className="stats-item">
                <h1>200+</h1>
                <span>Bespoke Safaris</span>
              </div>

              <div className="stats-item">
                <h1>1000+</h1>
                <span>Happy Clients</span>
              </div>
            </div>

            <div className="about-details-span">
              <span>
                Afrikan Accent Adventures is a destination management company
                with its headquarters in Nairobi, Kenya. The company manages
                travel options across East and Southern Africa. Backed with
                years of experience and reliable local knowledge about all our
                destinations, we offer tailor-made safaris that aptly
                accommodate your interests, budget and occasion. From the moment
                you contact us for your travel solutions, we show our commitment
                through a comprehensive, well caring and personalized service
                until when you wave us a satisfactory goodbye.
              </span>
            </div>
          </div>
        </div>

        <div className="why">
          <h1 className="black">
            Why Package Book
            <span className="red">    AfriKan Accent Adventures?</span>
          </h1>

          <div className="why-detail">
            <div className="reasons">
              <div className="reason-stats">
                <div className="stat">
                  <h1>500+</h1>
                  <span>Awesome Tour</span>
                </div>

                <div className="stats-detail">
                  Our services ensure that you enjoy the best a destination has
                  to offer with guidance only a guide well-versed with the
                  destination can deliver. We remain satisfied when our
                  travelers return home bearing memories immortalized not just
                  in photos but also in a newfound appreciation for the natural
                  and cultural wealth their destinations had to offer. Afrikan
                  Accent Adventures personnel, management and all staff members
                  are knowledgeable, efficient and well acquainted throughout
                  the East African region as experienced professionals.
                </div>
              </div>

              <div className="reason-stats">
                <div className="stat">
                  <h1>20+</h1>
                  <span>Fleet of Safari Vehicles</span>
                </div>

                <div className="stats-detail">
                  Our fleet of safari vehicles is handled by friendly, well
                  trained and seasoned driver/guides who are fluent in several
                  languages. In line with our endeavor to offer top-notch
                  service, we have established a standard for high-quality
                  safari vehicles. Afrikan Accent operates four-wheel drive land
                  cruisers and safari minibusses that are built to suit the
                  rugged terrain of Africa’s wild as well as the smooth roads of
                  her urban areas. The vehicles are fully insured and fitted
                  with pop-up roofs and window seats to accommodate six guests
                  comfortably. Afrikan Accent Adventures personnel, management
                  and all staff members are knowledgeable, efficient and well
                  acquainted throughout the East African region as experienced
                  professionals.
                </div>
              </div>
              <div className="reason-stats">
                <div className="stat">
                  <h1>1000+</h1>
                  <span>Safaris</span>
                </div>

                <div className="stats-detail">
                  Fully escorted, elegant, comfortable, and affordable
                  adventures are just the icing on our resume. Join us in a fun
                  exploration of all the best the beautiful continent of Africa
                  has prepared. From the lit urban grandeur of her cities; to
                  her small towns that blend urbanization with just the right
                  amount of unspoiled nature. From the white glistening sandy
                  beaches of her coastal strip to the delightful array of flora
                  and fauna nestled in her wild. And not forgetting her friendly
                  and hospitable people with unique cultures and beautiful
                  histories that they hold proud. Our Company is represented on
                  Safari Bookings and we would highly appreciate if you gave
                  your feedback about our services to you on the same platform
                  too. Thank you for opting to travel with Afrikan Accent
                  Adventures! Your African Safari Partner.
                </div>
              </div>

              <div className="reason-stats">
                <div className="stat">
                  <span>Credentials</span>
                </div>

                <div className="stats-detail">
                  Afrikan Accent adventures have earned respect and enviable
                  loyalty from a good number of blue-chip companies that have
                  used our services for incentive trips and conferences
                  throughout Africa and beyond. Our reputation for bespoke
                  personal service driven by a knack for creative ideas and keen
                  attention to detail. Extended to the services we provide to
                  travel agents, corporates and other groups such as educational
                  institutions, clubs or just friends out to enjoy the enticing
                  world of travel.
                </div>
              </div>
            </div>

            <div className="why-image">
              <div className="why-activies-item">
                <img src="https://res.cloudinary.com/dap91fhxh/image/upload/v1713248621/1713248475582_t8tfjf.jpg" alt="" />
              </div>

              <div className="why-activies-item">
                <img src="https://res.cloudinary.com/dap91fhxh/image/upload/v1713248621/1713248475600_ctg7aj.jpg" />
              </div>

              <div className="why-activies-item">
                <img src="https://res.cloudinary.com/dap91fhxh/image/upload/v1713248622/1713248475590_l57yjd.jpg" />
              </div>

              <div className="why-activies-item">
                <img src="images/bus.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
