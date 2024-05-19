import React from "react";
import { Link } from "react-router-dom";
import "./orders.css";
import { MdOutlineAccountCircle, MdManageAccounts } from "react-icons/md";

export const Orders = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="pers_main">
            <div className="pers_left">
              <div className="pers_title1">
                <MdOutlineAccountCircle className="logow" />
                <div className="jimmi">Jimmy Smith</div>
              </div>
              <div className="pers_title2">
                <MdManageAccounts className="logo2" />
                <Link to="/perconal" className="data">
                  Personal Data
                </Link>
              </div>
              <div className="pers_title3">
                <MdManageAccounts className="logo2" />
                <Link to="/payment" className="data">
                  Payment & Instalments
                </Link>
              </div>
              <div className="pers_title4">
                <MdManageAccounts className="logo2" />
                <Link to="/orders" className="data">
                  Orders
                </Link>
              </div>
              <div className="pers_title5">
                <MdManageAccounts className="logo2" />
                <Link to="/wishlist" className="data">
                  Wisht List
                </Link>
              </div>
              <div className="pers_title6">
                <MdManageAccounts className="logo2" />
                <Link to="/discount" className="data">
                  Discounts
                </Link>
              </div>
              <div className="pers_title7">
                <MdManageAccounts className="logo2" />
                <Link to="/securiti" className="data">
                  Security& access
                </Link>
              </div>
              <div className="pers_title8">
                <MdManageAccounts className="logo2" />
                <Link to="/notifications" className="data">
                  Notifications
                </Link>
              </div>
              <div className="pers_title9">
                <MdManageAccounts className="logo2" />
                <Link to="/contactus" className="data">
                  Contact us
                </Link>
              </div>
              <div className="pers_title10">
                <MdManageAccounts className="logo2" />
                <Link to="/logout" className="data">
                  Log out
                </Link>
              </div>
            </div>
            <div className="pers_right">
              <div className="ident">Order History</div>
              <div className="verify">Track, return or purchase items</div>

              <div className="line3">
                <div className="curret_titles">
                  <Link to="/currentsingle">
                    <div className="current_title">Current</div>
                  </Link>
                  <div className="current_title">Delivered</div>
                  <div className="current_title">Canceled</div>
                  <div className="current_title">Returned</div>
                </div>
              </div>
              <hr className="crhr" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
