import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineAccountCircle, MdManageAccounts } from "react-icons/md";
import { PiEyeSlashLight } from "react-icons/pi";
import "./securiti.css"

export const Securiti = () => {
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
              <div className="dics">Security settings</div>
              <div className="code">Change password and phone number</div>

              <div className="labels">
                <div className="label">
                  <div className="label1">label</div>
                  <div className="label2">
                    <PiEyeSlashLight className="lab" />
                  </div>
                </div>{" "}
                <div className="label">
                  <div className="label1">label</div>
                  <div className="label2">
                    <PiEyeSlashLight className="lab" />
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
