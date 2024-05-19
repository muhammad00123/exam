import React from "react";
import "./blog.css";
import meta from "../../../assets/images/meta.png";
import date from "../../../assets/images/date & time.png";
import naushnik from "../../../assets/images/naushnik.png";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";

export const Blog = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="blogs_main">
            <div className="blogs_left">
              <div className="blog_card">
                <div className="blog_img">
                  <img src={meta} alt="" />
                </div>
                <div className="month">
                  <div className="ag">
                    <img src={date} alt="" />
                  </div>
                </div>
                <h1>Meta Platforms plans to release free...</h1>
                <p>
                  The parent company of Facebook, Meta <br /> Platforms, is
                  introducing software to help...
                </p>
              </div>
            </div>
            <div className="blog_right">
              <div className="right_main">
                <div className="blog_right_img">
                  <img src={naushnik} alt="" />
                </div>
                <div className="blog_titles">
                  <div className="things">
                    8 Things You Probably Didn’t Know About Headphones
                  </div>
                  <p>
                    Owning a headphone could mean a different thing for
                    different people. For some, it <br /> act as a fashion
                    statement. It’s easy to spot these people, the headphone are
                    almo...
                  </p>

                  <div className="months">
                    <div className="month1">
                      <div className="month_logo">
                        <MdOutlineCalendarMonth />
                      </div>
                      <div className="date">March , 28 , 2023</div>
                    </div>
                    <div className="month2">
                      <MdOutlineFavoriteBorder />
                    </div>
                  </div>
                </div>
              </div>
              <div className="right_main">
                <div className="blog_right_img">
                  <img src={naushnik} alt="" />
                </div>
                <div className="blog_titles">
                  <div className="things">
                    8 Things You Probably Didn’t Know About Headphones
                  </div>
                  <p>
                    Owning a headphone could mean a different thing for
                    different people. For some, it <br /> act as a fashion
                    statement. It’s easy to spot these people, the headphone are
                    almo...
                  </p>

                  <div className="months">
                    <div className="month1">
                      <div className="month_logo">
                        <MdOutlineCalendarMonth />
                      </div>
                      <div className="date">March , 28 , 2023</div>
                    </div>
                    <div className="month2">
                      <MdOutlineFavoriteBorder />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
