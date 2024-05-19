import React from "react";
import "./blog.css";
import meta from "../../assets/images/meta.png"; // Adjusted import path
import date from "../../assets/images/date & time.png"; // Adjusted import path
import naushnik from "../../assets/images/naushnik.png"; // Adjusted import path
import {
  MdOutlineCalendarMonth,
  MdOutlineFavoriteBorder,
} from "react-icons/md";
import video from "../../assets/images/Videos card.png";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div>
      <div className="container">
        <div className="blog_main">
          <div className="blog_left">
            <div className="blokg_cards">
              <div className="blok_cardf">
                <div className="blok_card">
                  <div className="blok_card_img">
                    <img src={meta} alt="" />{" "}
                    {/* Ensure meta is correctly referenced */}
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
                <div className="blok_card">
                  <div className="blok_card_img">
                    <img src={meta} alt="" />{" "}
                    {/* Ensure meta is correctly referenced */}
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
              <div className="blok_cardf">
                <div className="blok_card">
                  <div className="blok_card_img">
                    <img src={meta} alt="" />{" "}
                    {/* Ensure meta is correctly referenced */}
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
                <div className="blok_card">
                  <div className="blok_card_img">
                    <img src={meta} alt="" />{" "}
                    {/* Ensure meta is correctly referenced */}
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
              <div className="posts">Recent posts</div>

              <div className="blog_images">
                <div className="blok_right_main">
                  <Link to="/blogsingle">
                    <div className="blog_right_img">
                      <img src={naushnik} alt="" />
                    </div>
                  </Link>
                  <div className="blog_titles">
                    <div className="things">
                      8 Things You Probably Didn’t Know About Headphones
                    </div>
                    <p>
                      Owning a headphone could mean a different thing for
                      different people. For some, it <br /> act as a fashion
                      statement. It’s easy to spot these people, the headphone
                      are almo...
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
                <div className="blok_right_main">
                  <Link to="/blogsingle">
                    <div className="blog_right_img">
                      <img src={naushnik} alt="" />
                    </div>
                  </Link>
                  <div className="blog_titles">
                    <div className="things">
                      8 Things You Probably Didn’t Know About Headphones
                    </div>
                    <p>
                      Owning a headphone could mean a different thing for
                      different people. For some, it <br /> act as a fashion
                      statement. It’s easy to spot these people, the headphone
                      are almo...
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
                <div className="blok_right_main">
                  <Link to="/blogsingle">
                    <div className="blog_right_img">
                      <img src={naushnik} alt="" />
                    </div>
                  </Link>
                  <div className="blog_titles">
                    <div className="things">
                      8 Things You Probably Didn’t Know About Headphones
                    </div>
                    <p>
                      Owning a headphone could mean a different thing for
                      different people. For some, it <br /> act as a fashion
                      statement. It’s easy to spot these people, the headphone
                      are almo...
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
                <div className="blok_right_main">
                  <Link to="/blogsingle">
                    <div className="blog_right_img">
                      <img src={naushnik} alt="" />
                    </div>
                  </Link>
                  <div className="blog_titles">
                    <div className="things">
                      8 Things You Probably Didn’t Know About Headphones
                    </div>
                    <p>
                      Owning a headphone could mean a different thing for
                      different people. For some, it <br /> act as a fashion
                      statement. It’s easy to spot these people, the headphone
                      are almo...
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
          <div className="blok_right">
            <div className="vidyo">Videos</div>
            <div className="vidyo_img">
              <img src={video} alt="" />
            </div>{" "}
            <div className="vidyo_img">
              <img src={video} alt="" />
            </div>
            <div className="vidyo_img">
              <img src={video} alt="" />
            </div>
            <div className="vidyo_img">
              <img src={video} alt="" />
            </div>
            <div className="vidyo_img">
              <img src={video} alt="" />
            </div>
            <div className="vidyo_img">
              <img src={video} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
