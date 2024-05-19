import React from "react";
import "./smart.css";
import soat from "../../../assets/images/soat.png"

export const Smart = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="smart_sect">
            <div className="sect_main">
              <div className="sect_left">
                <div className="watch">SMART WATCH</div>
                <p>Various designs and brands</p>
                <button className="sect_left_btn">view</button>
              </div>
              <div className="sect_right">
                <div className="sect_tight_img">
                    <img src={soat} alt="" />
                </div>
                  </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
