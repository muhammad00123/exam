import React from "react";
import "./wishlist.css";
import ipad from "../../../assets/images/ipad.png";
import { RiDeleteBin5Fill } from "react-icons/ri";

export const Wishlist = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="wish">Wish list</div>
          <div className="see">See your favorites list here</div>

          <div className="watch_cards">
            <div className="watch_card">
              <div className="watch_card_img">
                <img src={ipad} alt="" />
              </div>
              <hr />
              <div className="watch_card_title">
                APPLE iPad Pro 11” M2 Chip (4th Generation) Wi-Fi 128GB Silver
              </div>
              <div className="watch_card_suptitles">
                <div className="watch_card_btn">
                  <button className="add">Add to cart</button>
                </div>
                <div className="watch_basket">
                  <RiDeleteBin5Fill />
                </div>
              </div>
            </div>
            <div className="watch_card">
              <div className="watch_card_img">
                <img src={ipad} alt="" />
              </div>
              <hr />
              <div className="watch_card_title">
                APPLE iPad Pro 11” M2 Chip (4th Generation) Wi-Fi 128GB Silver
              </div>
              <div className="watch_card_suptitles">
                <div className="watch_card_btn">
                  <button className="add">Add to cart</button>
                </div>
                <div className="watch_basket">
                  <RiDeleteBin5Fill />
                </div>
              </div>
            </div>
            <div className="watch_card">
              <div className="watch_card_img">
                <img src={ipad} alt="" />
              </div>
              <hr />
              <div className="watch_card_title">
                APPLE iPad Pro 11” M2 Chip (4th Generation) Wi-Fi 128GB Silver
              </div>
              <div className="watch_card_suptitles">
                <div className="watch_card_btn">
                  <button className="add">Add to cart</button>
                </div>
                <div className="watch_basket">
                  <RiDeleteBin5Fill />
                </div>
              </div>
            </div>
          </div>
          <div className="watch_cards">
            <div className="watch_card">
              <div className="watch_card_img">
                <img src={ipad} alt="" />
              </div>
              <hr />
              <div className="watch_card_title">
                APPLE iPad Pro 11” M2 Chip (4th Generation) Wi-Fi 128GB Silver
              </div>
              <div className="watch_card_suptitles">
                <div className="watch_card_btn">
                  <button className="add">Add to cart</button>
                </div>
                <div className="watch_basket">
                  <RiDeleteBin5Fill />
                </div>
              </div>
            </div>
            <div className="watch_card">
              <div className="watch_card_img">
                <img src={ipad} alt="" />
              </div>
              <hr />
              <div className="watch_card_title">
                APPLE iPad Pro 11” M2 Chip (4th Generation) Wi-Fi 128GB Silver
              </div>
              <div className="watch_card_suptitles">
                <div className="watch_card_btn">
                  <button className="add">Add to cart</button>
                </div>
                <div className="watch_basket">
                  <RiDeleteBin5Fill />
                </div>
              </div>
            </div>
            <div className="watch_card">
              <div className="watch_card_img">
                <img src={ipad} alt="" />
              </div>
              <hr />
              <div className="watch_card_title">
                APPLE iPad Pro 11” M2 Chip (4th Generation) Wi-Fi 128GB Silver
              </div>
              <div className="watch_card_suptitles">
                <div className="watch_card_btn">
                  <button className="add">Add to cart</button>
                </div>
                <div className="watch_basket">
                  <RiDeleteBin5Fill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
