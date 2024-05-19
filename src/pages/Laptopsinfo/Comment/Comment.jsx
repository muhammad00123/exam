import React from "react";
import "./comment.css";

export const Comment = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="comment_head">Comments</div>

          <div className="comments_left_right">
            <div className="comment_left">
              <div className="leav">
                leave your comments here for <br /> other customers
              </div>
              <div className="comment_btns">
                <div className="comment_btn1">
                  <button className="btn1">
                    Share your thoughts about this <br /> product here
                  </button>
                </div>
                <div className="comment_btn2">
                  <button className="btn2">Comment</button>
                </div>
              </div>
              <div className="by">By feature</div>
              <div className="battery_mian">
                <div className="batt_titles">
                  <div className="charg">Battery charge</div>
                  <div className="line"></div>
                  <div className="grade">4.8</div>
                </div>
                <div className="batt_titles">
                  <div className="charg">Monitor</div>
                  <div className="line"></div>
                  <div className="grade">4.8</div>
                </div>
                <div className="batt_titles">
                  <div className="charg">Lightness</div>
                  <div className="line"></div>
                  <div className="grade">4.8</div>
                </div>
              </div>
            </div>
            <div className="comment_right">
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
