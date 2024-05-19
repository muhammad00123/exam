import React from 'react'
import "./about.css"
import mini from "../../../assets/images/minikomp.png"


export const About = () => {
  return (
    <div>
        <section>
            <div className="container">
                <div className="about_vlogs">
                    <div className="about_vlog">
                        <div className="about_vlog_img">
                            <img src={mini} alt="" />
                        </div>
                        <div className="about_vlog_title">Latest and Greatest Tech</div>
                    </div>
                    <div className="about_vlog">
                        <div className="about_vlog_img">
                            <img src={mini} alt="" />
                        </div>
                        <div className="about_vlog_title">Guarantee</div>
                    </div>
                    <div className="about_vlog">
                        <div className="about_vlog_img">
                            <img src={mini} alt="" />
                        </div>
                        <div className="about_vlog_title">Free Shipping over 1000$</div>
                    </div>
                    <div className="about_vlog">
                        <div className="about_vlog_img">
                            <img src={mini} alt="" />
                        </div>
                        <div className="about_vlog_title">24/7 Support</div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
