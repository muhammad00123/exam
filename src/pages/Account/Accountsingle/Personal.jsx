import React from "react";
import { Link } from "react-router-dom";
import "./personal.css";
import { MdOutlineAccountCircle, MdManageAccounts } from "react-icons/md";

export const Personal = () => {
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
              <div className="ident">Identification</div>
              <div className="verify">Verify your identity</div>
              <div className="names">
                <div className="name1">Full name</div>
                <div className="name1">E-mail Address</div>
              </div>
              <div className="inputs">
                <div className="input1">
                  <input type="text" placeholder="Jimmy Smith" />
                </div>
                <div className="input1">
                  <input type="email" placeholder="Jimmy.smith1996@gmail.com" />
                </div>
              </div>
              <div className="names">
                <div className="name1">Full name</div>
                <div className="name1">E-mail Address</div>
              </div>
              <div className="inputs">
                <div className="input1">
                  <input type="text" placeholder="Jimmy Smith" />
                </div>
                <div className="input1">
                  <input type="email" placeholder="Jimmy.smith1996@gmail.com" />
                </div>
              </div>
              <div className="names">
                <div className="name1">Full name</div>
                <div className="name1">E-mail Address</div>
              </div>
              <div className="inputs">
                <div className="input1">
                  <input type="text" placeholder="Jimmy Smith" />
                </div>
                <div className="input1">
                  <input type="email" placeholder="Jimmy.smith1996@gmail.com" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
