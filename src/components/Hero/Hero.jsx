import React from "react";
import heroCss from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <section className={heroCss.container}>
      {/* left side */}
      <div className={heroCss.h_sides}>
        <h1 className={heroCss.text1}>Skin Protection Cream</h1>

        <div className={heroCss.text2}>
          <h1>Trendy Collection</h1>
          <p>Seedily say has suitbale disposal and boy. Exercise joy man child rejoiced.</p>
        </div>
      </div>

      {/* midlle side hero image */}
      <div className={heroCss.wrapper}>
        <div className={heroCss.blueCircle}></div>
        <img src={HeroImg} alt="Hero Image" width={600} />
        <div className={heroCss.cart2}>
          <RiShoppingBagFill />

          <div className={heroCss.signup}>
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className={heroCss.h_sides}>
        <div className={heroCss.traffic}>
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>

        <div className={heroCss.costumers}>
          <span>100k</span>
          <span>Happy Costumers</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
