import React from "react";
import { Link } from "react-router-dom";
import "./payment.css";
import { MdOutlineAccountCircle, MdManageAccounts } from "react-icons/md";
import visa from "../../../assets/images/visa.png";

export const Payment = () => {
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
              <div className="cerd">Cards</div>
              <div className="manage">manage payment methods</div>

              <div className="inputs">
                <div className="input3">
                  <input type="text" placeholder="Credit or Debit cards" />
                </div>
                <div className="vizas">
                  <div className="viza1">
                    <img className="visa" src={visa} alt="" />
                  </div>
                  <div className="viza1">
                    <img className="visa" src={visa} alt="" />
                  </div>
                  <div className="viza1">
                    <img className="visa" src={visa} alt="" />
                  </div>
                </div>
              </div>

              <div className="inputs">
                <div className="input4">
                  <input type="text" placeholder="Paypal" />
                </div>
                <div className="viza2">
                  <img className="visa" src={visa} alt="" />
                </div>
              </div>

              <div className="ins">Instalments</div>
              <Link to="/paysingle">
                <div className="inst">Manage your instalment→</div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
