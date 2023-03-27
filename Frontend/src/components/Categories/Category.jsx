import React from "react";
import "./category.css";
import { Link } from "react-router-dom";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

const Category = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div className="category-container">
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
          <div className="category-group-holidays">
            <Link to="/group-holidays">
              <span className="destination">Group Safaris</span>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="category-cultural-safaris">
            <Link to="/cultural-safaris">
              <span className="destination">Cultural Safaris</span>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="category-family-holidays">
            <Link to="/family-holidays">
              <span className="destination">Family Safaris</span>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="category-gorilla-trekking">
            <Link to="/gorilla-trekking">
              <span className="destination">Gorilla Trekking</span>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="category-honey-moon">
            <Link to="/honey-moons">
              <span className="destination">Honey Moons</span>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="category-luxury-safaris">
            <Link to="/luxury-africa-safaris">
              <span className="destination">Luxury Safaris</span>
            </Link>
          </div>
        </SwiperSlide>

        
        <SwiperSlide>
          <div className="category-fly-in-safaris">
            <Link to="/fly-in-safaris">
              <span className="destination">Fly-in Safaris</span>
            </Link>
          </div>
        </SwiperSlide>
      
       
      </Swiper>
    </div>
  );
};

export default Category;
