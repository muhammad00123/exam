import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import "./contact.css";

export default function Contact() {
  return (
    <section className="container">
      <div className="contact_head">
        <div className="contact_card">
          <div className="contact_img">
            <MdOutlineMailOutline className="logo" />
          </div>
          <div className="contact_title">Office</div>
          <div className="contact_suptitle">
            123 Main Street, <br /> Anytown, USA
          </div>
        </div>
        <div className="contact_card">
          <div className="contact_img">
            <MdOutlineMailOutline className="logo" />
          </div>
          <div className="contact_title">Email</div>
          <div className="contact_suptitle">info@techheim.com</div>
        </div>
        <div className="contact_card">
          <div className="contact_img">
            <MdOutlineMailOutline className="logo" />
          </div>
          <div className="contact_title">Phone</div>
          <div className="contact_suptitle">+1 (555) 123-4567</div>
        </div>
      </div>
      <div className="contact_sect2">
        <div className="sect_mains">
          <div className="main_left">
            <div className="message">Message us</div>
            <p>
              We're here to assist you every step of the way. <br /> Whether you
              have a question, need technical <br /> support, or simply want to
              share your feedback, our <br /> dedicated team is ready to listen
              and provide prompt <br /> assistance.
            </p>
          </div>
          <div className="main_right">
            <div className="name_input">
              <input
                className="name_inp"
                placeholder="* Your name"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="email_input">
              <input
                className="email_inp"
                placeholder="* Email"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="message_input">
              <textarea
                className="message_inp"
                placeholder="Message"
                name="message"
                id="message"
                cols="30"
                rows="5"
              ></textarea>
            </div>
          </div>
        </div>
        <button className="btn_sub">Submit</button>
      </div>
    </section>
  );
}
