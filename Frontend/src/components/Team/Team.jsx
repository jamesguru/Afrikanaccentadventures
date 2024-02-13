import React from "react";
import "./team.css";
import Slider from "infinite-react-carousel";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

const Team = () => {
  return (
    <div className="team">
      <div className="team-header">
        <h1>GUIDES TEAM</h1>
        <span>Our highly trained efficient staffs.</span>
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={5}
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
          <div className="team-item">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dap91fhxh/image/upload/v1694774972/hellen2_nni3vx.jpg"
                alt="Our Director"
                className="profile"
              />
            </div>
            <div className="name">
              <h4>Hellen Asiko</h4>
              <span>Director</span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="team-item">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dap91fhxh/image/upload/v1694774973/nick_dcekek.jpg"
                alt="Our Driver"
                className="profile"
              />
            </div>
            <div className="name">
              <h4>Nick Wangithi</h4>
              <span>Driver Guide</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team-item">
                <div className="image">
                    <img src="https://res.cloudinary.com/dap91fhxh/image/upload/v1695637191/Peter_payycs.jpg" alt="Our Driver" className='profile'/>
                </div>
                <div className="name">
                    <h4>Peter King'ori</h4>
                    <span>Driver Guide(Spanish Speaking)</span>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="team-item">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dap91fhxh/image/upload/v1694774972/james_m0udid.jpg"
                alt="IT manager"
                className="profile"
              />
            </div>
            <div className="name">
              <h4>James Mwathi</h4>
              <span>Chief Technology Officer</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team-item">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dap91fhxh/image/upload/v1707295649/tour_ajzvad.jpg"
                alt="Spanish speaking guide"
                className="profile"
              />
            </div>
            <div className="name">
              <h4>John Kabuga</h4>
              <span>Spanish speaking guide</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Team;
