import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineAccountCircle, MdManageAccounts } from "react-icons/md";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./notification.css";
import { MdOutlineMarkEmailRead } from "react-icons/md";

export const Notification = () => {
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
                  Wishlist
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
                <Link to="/security" className="data">
                  Security & Access
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
                  Contact Us
                </Link>
              </div>
              <div className="pers_title10">
                <MdManageAccounts className="logo2" />
                <Link to="/logout" className="data">
                  Log Out
                </Link>
              </div>
            </div>
            <div className="pers_right">
              <div className="dics">Discounts & Voucher</div>
              <div className="code">
                Add discount code to apply a discount in your purchase
              </div>

              <div className="blovs">
                <div className="blov1">
                  <div className="blov">
                    <div className="blov_titl1">
                      <div className="email_logo">
                        <MdOutlineMarkEmailRead className="ema" />
                      </div>
                      <div className="email_tit">Emails</div>
                      <div className="bllov_imp">
                        <FormGroup>
                          <FormControlLabel
                            control={<Switch defaultChecked />}
                          />
                        </FormGroup>
                      </div>
                    </div>
                    <div className="wt">
                      We write emails to let you know <br /> what's important,
                      like: new order, <br /> confirmations{" "}
                    </div>
                  </div>
                  <div className="blov">
                    <div className="blov_titl1">
                      <div className="email_logo">
                        <MdOutlineMarkEmailRead className="ema" />
                      </div>
                      <div className="email_tit">Emails</div>
                      <div className="bllov_imp">
                        <FormGroup>
                          <FormControlLabel
                            control={<Switch defaultChecked />}
                          />
                        </FormGroup>
                      </div>
                    </div>
                    <div className="wt">
                      We write emails to let you know <br /> what's important,
                      like: new order, <br /> confirmations{" "}
                    </div>
                  </div>
                </div>
                <div className="blov12">
                  <div className="blov">
                    <div className="blov_titl1">
                      <div className="email_logo">
                        <MdOutlineMarkEmailRead className="ema" />
                      </div>
                      <div className="email_tit">Emails</div>
                      <div className="bllov_imp">
                        <FormGroup>
                          <FormControlLabel
                            control={<Switch defaultChecked />}
                          />
                        </FormGroup>
                      </div>
                    </div>
                    <div className="wt">
                      We write emails to let you know <br /> what's important,
                      like: new order, <br /> confirmations{" "}
                    </div>
                  </div>
                  <div className="blov">
                    <div className="blov_titl1">
                      <div className="email_logo">
                        <MdOutlineMarkEmailRead className="ema" />
                      </div>
                      <div className="email_tit">Emails</div>
                      <div className="bllov_imp">
                        <FormGroup>
                          <FormControlLabel
                            control={<Switch defaultChecked />}
                          />
                        </FormGroup>
                      </div>
                    </div>
                    <div className="wt">
                      We write emails to let you know <br /> what's important,
                      like: new order, <br /> confirmations{" "}
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
