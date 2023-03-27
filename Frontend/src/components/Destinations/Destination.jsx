import React from "react";
import "./destination.css";
import { Link } from "react-router-dom";
import Slider from "infinite-react-carousel";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

const Destination = () => {
  return (
    <div className="destination-container">
      <div className="destination-header">
        <h1>Destinations</h1>
      </div>

      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        modules={[Pagination, Navigation]}
        autoplay={{ delay: 2500 }}
        navigation={true}
        loopFillGroupWithBlank={true}
        loop={true}
        breakpoints={{
          1400: {
            slidesPerView: 4,
          },

          1024: {
            slidesPerView: 3,
          },

          576: {
            // width: 576,
            slidesPerView: 2,
          },
          350: {
            // width: 768,
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <div className="destination-item-kenya">
            <Link to="/destination/kenya">
              <span className="destination">Kenya</span>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="destination-item-uganda">
            <Link to="/destination/uganda">
              <span className="destination">Uganda</span>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="destination-item-tanzania">
            <Link to="/destination/tanzania">
              <span className="destination">Tanzania</span>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="destination-item-rwanda">
            <Link to="/destination/rwanda">
              <span className="destination">Rwanda</span>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="destination-item-namimbia">
            <Link to="/destination/namibia">
              <span className="destination">Namibia</span>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="destination-item-botswana">
            <Link to="/destination/botswana">
              <span className="destination">Botswana</span>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="destination-item-southafrica">
            <Link to="/destination/southafrica">
              <span className="destination">South Africa</span>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="destination-item-victoriafalls">
            <Link to="/destinations/victoriafalls">
              <span className="destination">Victoria Falls</span>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Destination;
