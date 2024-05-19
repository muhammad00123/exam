import React from "react";
import "./paysingle.css";

export const Paysingle = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="line">
            <div className="line_left">
              <div className="desc">Description</div>
            </div>
            <div className="line_center">
              <ul>
                <li>Due Amount </li>
                <li>Due Date</li>
                <li>Actual Amount </li>
                <li>Payment Date </li>
              </ul>
            </div>
            <div className="line_right">
              <div className="tit">Status</div>
              <div className="tit">Total</div>
            </div>
          </div>
          <div className="line2">
            <div className="line2_left">
              <div className="chek">
                <input className="cheks" type="checkbox" name="" id="" />
              </div>
              <div className="mac_logo"></div>
              <div className="color">#8967856</div>
            </div>
            <div className="line2_center">
              <div className="center_title">$543.02</div>
              <div className="center_titles">2023/08/20</div>
              <div className="center_titles">$543.02</div>
              <div className="center_titles">2023/08/15</div>
            </div>
            <div className="line2_right">
              <div className="right_btn">
                <button className="paid">Paid</button>
              </div>
              <div className="right_titl">$1385.52</div>
            </div>
          </div>
          <div className="line2">
            <div className="line2_left">
              <div className="chek">
                <input className="cheks" type="checkbox" name="" id="" />
              </div>
              <div className="mac_logo"></div>
              <div className="color">#8967856</div>
            </div>
            <div className="line2_center">
              <div className="center_title">$543.02</div>
              <div className="center_titles">2023/08/20</div>
              <div className="center_titles">$543.02</div>
              <div className="center_titles">2023/08/15</div>
            </div>
            <div className="line2_right">
              <div className="right_btn">
                <button className="paid">Paid</button>
              </div>
              <div className="right_titl">$1385.52</div>
            </div>
          </div>
          <div className="line2">
            <div className="line2_left">
              <div className="chek">
                <input className="cheks" type="checkbox" name="" id="" />
              </div>
              <div className="mac_logo"></div>
              <div className="color">#8967856</div>
            </div>
            <div className="line2_center">
              <div className="center_title">$543.02</div>
              <div className="center_titles">2023/08/20</div>
              <div className="center_titles">$543.02</div>
              <div className="center_titles">2023/08/15</div>
            </div>
            <div className="line2_right">
              <div className="right_btn">
                <button className="paid">Paid</button>
              </div>
              <div className="right_titl">$1385.52</div>
            </div>
          </div>

          <div className="totals">
            <div className="totsl1">
              <div className="tot1">Subtotal </div>
              <div className="tot2">842.50</div>
            </div>
            <div className="total2">
              <div className="tot_btn">
                <button className="tot">Pay</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
