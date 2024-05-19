import React from "react";
import "./hero.css";
import heroimg from "../../../assets/images/heroimg.png";

export const Hero = () => {
  return (
    <div>
      <div className="hero__left__right">
        <div className="hero__left">
          <div className="hero__left__title">Tech Heim</div>
          <div className="hero__left__suptitle">
            "Join the <span> digital revolution</span>"
          </div>
          <button className="hero__left__btn">Explore More</button>
        </div>
        <div className="hero__right">
          <img src={heroimg} alt="heroimg" />
        </div>
      </div>
    </div>
  );
};
