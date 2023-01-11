import React from "react";
import testiCss from "./Testimonials.module.css";
import TestiHero from "../../assets/testimonialHero.png";
import { TestimonialsData } from "../../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  return (
    <div className={testiCss.testimonials}>
      <div className={testiCss.wrapper}>
        <div className={testiCss.container}>
          <span>Top Rated</span>
          <span>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced</span>
        </div>

        <img src={TestiHero} alt="hero image" />

        <div className={testiCss.container}>
          <span>100k</span>
          <span>Happy Costumers with us</span>
        </div>
      </div>

      <div className={testiCss.reviews}>Reviews</div>

      <div className={testiCss.carousel}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className={testiCss.tcarousel}
          breakpoints={{
            856: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {TestimonialsData.map((testimonial, i) => (
            <SwiperSlide>
              <div className={testiCss.testimonial}>
                <img src={testimonial.image} alt="testimonial image" />
                <span>{testimonial.comment}</span>
                <hr />
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
