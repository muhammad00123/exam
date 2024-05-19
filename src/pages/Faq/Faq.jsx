import React from "react";
import "./faq.css";
import ask from "../../assets/images/asked.png";

export const Faq = () => {
  return (
    <div>
      <div className="container">
        <div className="sect_head">
          <div className="sect_head_img">
            <img src={ask} alt="" />
          </div>
        </div>
        <div className="section_suptitles">
          <div className="section_sup_left">
            <div className="table">Table of Contents</div>
            <div className="section_sup_left_title_main">
              <div className="section_sup_left_title">General</div>
              <div className="section_sup_left_title">Trusts & Safety</div>
              <div className="section_sup_left_title">Services</div>
              <div className="section_sup_left_title">Billing</div>
            </div>
          </div>
          <div className="section_sup_right">
            <div className="can">
              Can I purchase products from Tech Heim using installment <br />{" "}
              payments?
            </div>
            <p>
              Yes, Tech Heim offers the option to purchase products using both
              cash and <br /> installment payments. This allows you to choose
              the payment method that suits <br /> your needs and budget.
            </p>
          </div>
        </div>
        <hr className="hr" />
        <div className="section_bloks">
          <div className="section_sup_right">
            <div className="can">
              Can I purchase products from Tech Heim using installment <br />{" "}
              payments?
            </div>
            <p>
              Yes, Tech Heim offers the option to purchase products using both
              cash and <br /> installment payments. This allows you to choose
              the payment method that suits <br /> your needs and budget.
            </p>
          </div>
          <hr className="he" />
        </div>
        <div className="section_bloks">
          <div className="section_sup_right">
            <div className="can">
              Can I purchase products from Tech Heim using installment <br />{" "}
              payments?
            </div>
            <p>
              Yes, Tech Heim offers the option to purchase products using both
              cash and <br /> installment payments. This allows you to choose
              the payment method that suits <br /> your needs and budget.
            </p>
          </div>
          <hr className="he" />
        </div>
        <div className="section_bloks">
          <div className="section_sup_right">
            <div className="can">
              Can I purchase products from Tech Heim using installment <br />{" "}
              payments?
            </div>
            <p>
              Yes, Tech Heim offers the option to purchase products using both
              cash and <br /> installment payments. This allows you to choose
              the payment method that suits <br /> your needs and budget.
            </p>
          </div>
          <hr className="he" />
        </div>
        <div className="section_bloks">
          <div className="section_sup_right">
            <div className="can">
              Can I purchase products from Tech Heim using installment <br />{" "}
              payments?
            </div>
            <p>
              Yes, Tech Heim offers the option to purchase products using both
              cash and <br /> installment payments. This allows you to choose
              the payment method that suits <br /> your needs and budget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
