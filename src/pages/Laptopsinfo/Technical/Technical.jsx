import React from "react";
import "./technical.css";

export const Technical = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="section_header">
            <div className="header_items">
              <div className="item1">Technical Details</div>
              <div className="item2">Similar Products</div>
              <div className="item3">Comments</div>
            </div>
            <hr className="href" />
          </div>

          <div className="tech">Technical Details</div>
          <div className="techno_main">
            <div className="main_titles1">
              <div className="title1">Display</div>
              <div className="title1">Graphics</div>
              <div className="title1">Processor</div>
              <div className="title1">In the box</div>
              <div className="title1">Height</div>
              <div className="title1">Width</div>
            </div>
            <div className="main_titles2">
              <div className="title2">13.3-inch (diagonal) LED-backlit display with IPS technology</div>
              <div className="title2">Apple 10-core GPU</div>
              <div className="title2">Apple M2 chip</div>
              <div className="title2">67W USB-C Power Adapter, USB-C Charge Cable (2 m)</div>
              <div className="title2">0.61 inch (1.56 cm)</div>
              <div className="title2">11.97 inches (30.41 cm)</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
