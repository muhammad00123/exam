import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaShoppingBasket } from "react-icons/fa";
import logo from "../../assets/images/logo (1).png";
import SingUpModal from "../../pages/Modal/Headersingupmodal/Singupmodal";

const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="header_inner">
            <div className="header_left">
              <div className="header_logo">
                <Link to="/">
                  <img src={logo} alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="header_center">
              <ul className="header__ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/blogs">Blog</Link>
                </li>
                <li>
                  <Link to="/faq">Faq</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/account">Account</Link>
                </li>
              </ul>
            </div>
            <div className="header__right">
              <Link to="/all"> <CiSearch className="header__icon" /></Link>
              <FaShoppingBasket className="header__icon" />
              <SingUpModal />
            </div>
          </div>
        </div>
      </header>
      <hr className="hl" />
    </div>
  );
};

export default Header;
