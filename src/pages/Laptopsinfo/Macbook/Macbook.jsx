import React from "react";
import macbook from "../../../assets/images/macbook.svg";
import macbook1 from "../../../assets/images/macbook(1).svg";
import macbook2 from "../../../assets/images/macbook(2).svg";
import macbook3 from "../../../assets/images/macbook(3).svg";
import macbook4 from "../../../assets/images/macbook(4).svg";
import macbook5 from "../../../assets/images/macbook(5).svg";
import { IoIosCheckmark } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { IoStarSharp } from "react-icons/io5";
import "./macbook.css";

function Macbook() {
  return (
    <div>
      <div className="macbook-left-middle-right">
        <div className="macbook-left">
          <div className="macbook-img">
            <img src={macbook} alt="" />
          </div>
          <div className="macbook-img-5">
            <ul>
              <li>
                <img src={macbook1} alt="" />
              </li>
              <li>
                <img src={macbook2} alt="" />
              </li>
              <li>
                <img src={macbook3} alt="" />
              </li>
              <li>
                <img src={macbook4} alt="" />
              </li>
              <li>
                <img src={macbook5} alt="" />
              </li>
            </ul>
          </div>
        </div>

        <div className="macbook-middle">
          <h1>MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</h1>
          <div className="macbook-rate">
            <div className="rate-star">
              <IoStarSharp className="iostar" />
              <ul>
                <li>4.9</li>
              </ul>
            </div>
            <div className="vertical-line"></div>
            <ul>
              <li>sold 125</li>
            </ul>
          </div>

          <div className="srock">
            <ul>
              <li>
                <CiShop className="ciShop" /> In Stock{" "}
              </li>
              <li>
                <CiShop className="ciShop" /> In Stock
              </li>
              <li>
                <CiShop className="ciShop" /> In Stock
              </li>
            </ul>
          </div>
          <div className="select-color">
            <h1>Select color</h1>
            <div className="select-color-krug">
              <div className="select-color1"></div>
              <div className="select-color2">
                <IoIosCheckmark />
              </div>
            </div>
          </div>

          <div className="macbook-brend">
            <ul>
              <li className="befor">brand</li>
              <li className="befor">Model Name </li>
              <li className="befor">Screen Size</li>
              <li className="befor">Hard Disk Size</li>
              <li className="befor">CPU Model</li>
            </ul>

            <ul className="aplle">
              <li>Apple</li>
              <li>Macbook Pro</li>
              <li>13.3 Inches</li>
              <li>256 GB</li>
              <li>core i5</li>
            </ul>
          </div>
        </div>
        <div className="macbook_card">
          <div className="seller">
            <div className="price">$ 1299.00</div>
            <div className="disc">
              <CiDiscount1 /> -12%
            </div>
          </div>
          <div className="last_p">
            <div className="last">last price </div>
            <div className="last">$ 1410,87</div>
          </div>
          <div className="radio_input">
            <div className="inp">
              {" "}
              <input type="radio" />
            </div>
            <div className="now">Pay Now</div>
          </div>
          <div className="radio_input">
            <div className="inp">
              {" "}
              <input type="radio" />
            </div>
            <div className="now">Buy in installments</div>
          </div>
          <div className="chose">choose your installments period</div>

          <div className="months">
            <div className="month">
              <div className="num">3</div>
              <div className="mon"> Months</div>
            </div>
            <div className="month">
              <div className="num">6</div>
              <div className="mon"> Months</div>
            </div>
            <div className="month">
              <div className="num">12</div>
              <div className="mon"> Months</div>
            </div>
            <div className="month">
              <div className="num">18</div>
              <div className="mon"> Months</div>
            </div>
          </div>
          <div className="dollar">
            $433.00 <span> /Month</span>
          </div>

          <div className="sellers_bttn">
            <div className="btn1">
              <button className="btnw">Buy Now</button>
            </div>
            <div className="btn2">
              <button className="btnq">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Macbook;
