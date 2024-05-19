import React from "react";
import "./footer.css";
import { LuMail } from "react-icons/lu";
import { FiYoutube } from "react-icons/fi";
import { RiUserLine } from "react-icons/ri";
import { GrFormNext } from "react-icons/gr";
import { TfiTwitter } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import paypal from "../../assets/images/paypal.png";
import { IoIosArrowDropup } from "react-icons/io";
import { LiaFacebookSquare } from "react-icons/lia";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import american from "../../assets/images/american express.png";
import visa from "../../assets/images/visa.png";
import master from "../../assets/images/master card.png";
import copyri from "../../assets/images/copyright.png";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-up-down">
          <div className="footer-up-start">
            <ul с>
              <h1>Company</h1>
              <Link to="/about">
                <li>about us</li>
              </Link>
              <Link to="/blogfooter">
                <li>blog</li>
              </Link>
              <Link to="/returns" >
                <li>returns</li>
              </Link>
              <Link to="/order" >
                <li>order status </li>
              </Link>
            </ul>

            <ul>
              <h1>Info</h1>
              <li>How it works?</li>
              <li>our promises</li>
              <li>FAQ</li>
            </ul>

            <ul>
              <h1>Company</h1>
              <li>
                <GrLocation />
                about us
              </li>
              <Link to="../../pages/BlogFooter/">
                <li>
                  <FiPhoneCall />
                  blog
                </li>
              </Link>
              <li>
                <LuMail />
                returns
              </li>
            </ul>

            <div className="footer-up-singup">
              <h1 className="footer-up-singup-text">
                Sign up for News and updates
              </h1>
              <div className="footer-up-input">
                <RiUserLine className="footer-up-icon-user" />
                <input
                  type="text"
                  className="footer-input"
                  placeholder="E-mail Address"
                />
                <GrFormNext className="footer-up-icon-next" />
              </div>
              <div className="footer-up-icons-it">
                <LiaFacebookSquare className="icons-it" />
                <TfiTwitter className="icons-it" />
                <FaInstagram className="icons-it" />
                <FiYoutube className="icons-it" />
              </div>
            </div>
            <div className="footer-up-sms">
              <AiOutlineQuestionCircle className="question" />
              <br />
              <IoIosArrowDropup className="arow" />
            </div>
          </div>
          <div className="footer-up-kard">
            <img src={paypal} alt="" />
            <img src={american} alt="" />
            <img src={visa} alt="" />
            <img src={master} alt="" />
          </div>

          <div className="footer-down-start">
            <div className="footer-dowm-h1">
              <img src={copyri} alt="" />
              <h1>2023 Tech Heim. </h1>
            </div>
            <div className="footer-dowm-cookie">
              <h2>cookie settings</h2>
              <h2>Privacy Policy</h2>
              <h2>Terms and Conditions </h2>
              <h2>Imprint </h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
