import React from "react";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="testimonials container section">
      <h2 className="section__title">Professional Testimonials</h2>
      <span className="section__subtitle">Feedback from Managers & Team Leads</span>

      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        // ✅ Make sure both Pagination and Autoplay are passed
        modules={[Pagination, Autoplay]}
      >
        {Data.map(({ id, image, title, description }) => (
          <SwiperSlide className="testimonial__card" key={id}>
            <img src={image} alt="" className="testimonial__img" />
            <h3 className="testimonial__name">{title}</h3>
            <p className="testimonial__description">{description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
