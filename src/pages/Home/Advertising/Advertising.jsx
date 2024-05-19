import React from "react";
import "./advertising.css"; // Предполагаю, что здесь находятся стили компонента
import iphone from "../../../assets/images/iphones.png";
import ps5 from "../../../assets/images/ps53.png"

export const Advertising = () => {
  return (
    <section>
      <div className="container">
        <div className="advertisement-left-right">
          <div className="advertisement-section-main">
            <div className="advertisement-section-left">
              <div className="advertisement-iphone">
                Iphone <span className="advertisement-ip"> 15 Series</span>
              </div>
              <div className="advertisement-iphones">
                <img src={iphone} alt="" />
              </div>
            </div>
            <div className="advertisement-section-right">
              <div className="advertisement-blocks">
                <div className="advertisement-block">
                  <div className="advertisement-number1">8</div>
                  <div className="advertisement-number2">Days</div>
                </div>

                <div className="advertisement-block">
                  <div className="advertisement-number1">8</div>
                  <div className="advertisement-number2">Days</div>
                </div>
                <div className="advertisement-block">
                  <div className="advertisement-number1">8</div>
                  <div className="advertisement-number2">Days</div>
                </div>
                <div className="advertisement-block">
                  <div className="advertisement-number1">8</div>
                  <div className="advertisement-number2">Days</div>
                </div>
              </div>
              <div className="advertisement-feel-start">
                <div className="advertisement-feel">It feels good to be the first </div>
                <p className="advertisement-text">
                  Get ready for the future of <br /> smartphones.Experience <br />{" "}
                  innovation like never before. Stay <br /> tuned for the big
                  iPhone 15 <br /> pre-sale.
                </p>
                <button className="advertisement-btn">Register Now</button>
              </div>
            </div>
          </div>
          <div className="advertisement-right">
            <h1 className="advertisement-right-h1">Play Station 5</h1>
            <div className="advertisement-right-ps5">
              <h1 className="advertisement-right-digital">Digital Edition + 2TB</h1>
              <img src={ps5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
