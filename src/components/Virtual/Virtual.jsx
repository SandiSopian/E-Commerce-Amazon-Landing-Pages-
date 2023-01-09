import React from "react";
import virtualCss from "./Virtual.module.css";
import Shade from "../../assets/shade.png";
import Before from "../../assets/before.png";
import After from "../../assets/after.png";
import ReactCompareImage from "react-compare-image";

const Virtual = () => {
  return (
    <div className={virtualCss.Virtual}>
      <p className={virtualCss.left}>
        <span>Virtual Try-On</span>
        <span>Never Buy the wrong Shade Again!</span>
        <span>Try Now!</span>
        <img src={Shade} alt="shade image" />
      </p>

      <div className={virtualCss.right}>
        <div className={virtualCss.wrapper}>
          <ReactCompareImage leftImage={Before} rightImage={After} />
        </div>
      </div>
    </div>
  );
};

export default Virtual;
