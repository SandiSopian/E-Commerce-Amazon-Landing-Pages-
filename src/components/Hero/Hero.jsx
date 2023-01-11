import React from "react";
import heroCss from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  return (
    <section className={heroCss.container}>
      {/* left side */}
      <div className={heroCss.h_sides}>
        <h1 className={heroCss.text1}>Skin Protection Cream</h1>

        <div className={heroCss.text2}>
          <span>Trendy Collection</span>
          <span>Seedily say has suitbale disposal and boy. Exercise joy man child rejoiced.</span>
        </div>
      </div>

      {/* midlle side hero image */}
      <div className={heroCss.wrapper}>
        {/* blue circle animation */}
        <motion.div initial={{ bottom: "2rem" }} whileInView={{ bottom: "0rem" }} className={heroCss.blueCircle} transition={transition}></motion.div>

        {/* hero image animation */}
        <motion.img initial={{ bottom: "-2rem" }} whileInView={{ bottom: "0rem" }} transition={transition} src={HeroImg} alt="Hero Image" width={600} />

        {/* cart animation */}
        <motion.div transition={transition} initial={{ right: "4%" }} whileInView={{ right: "2%" }} className={heroCss.cart2}>
          <RiShoppingBagFill />

          <div className={heroCss.signup}>
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
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
