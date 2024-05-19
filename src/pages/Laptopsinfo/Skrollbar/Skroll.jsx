import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import macbuk from "../../../assets/images/macbuk.png";
import { SlBasket } from "react-icons/sl";
import { IoHeartOutline } from "react-icons/io5";
import "./skroll.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

import { FreeMode, Pagination } from "swiper/modules";

export default function Skroll() {
  return (
    <>
      <div className="sim">Similar Products</div>
      <div className="mein">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="products-block-card">
              <Link to="/Laptopsinfo">
                <img src={macbuk} alt="" />
              </Link>
              <hr />
              <div className="applemacbook">
                Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2
                Chip / 256GB SSD / 8GB RAM) - French
              </div>

              <div className="addtocard">
                <button className="addtocardbtn">
                  <SlBasket />
                  Add to cart
                </button>
                <IoHeartOutline className="IoHeartOutline" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="products-block-card">
              <Link to="/Laptopsinfo">
                <img src={macbuk} alt="" />
              </Link>
              <hr />
              <div className="applemacbook">
                Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2
                Chip / 256GB SSD / 8GB RAM) - French
              </div>

              <div className="addtocard">
                <button className="addtocardbtn">
                  <SlBasket />
                  Add to cart
                </button>
                <IoHeartOutline className="IoHeartOutline" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="products-block-card">
              <Link to="/Laptopsinfo">
                <img src={macbuk} alt="" />
              </Link>
              <hr />
              <div className="applemacbook">
                Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2
                Chip / 256GB SSD / 8GB RAM) - French
              </div>

              <div className="addtocard">
                <button className="addtocardbtn">
                  <SlBasket />
                  Add to cart
                </button>
                <IoHeartOutline className="IoHeartOutline" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="products-block-card">
              <Link to="/Laptopsinfo">
                <img src={macbuk} alt="" />
              </Link>
              <hr />
              <div className="applemacbook">
                Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2
                Chip / 256GB SSD / 8GB RAM) - French
              </div>

              <div className="addtocard">
                <button className="addtocardbtn">
                  <SlBasket />
                  Add to cart
                </button>
                <IoHeartOutline className="IoHeartOutline" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="products-block-card">
              <Link to="/Laptopsinfo">
                <img src={macbuk} alt="" />
              </Link>
              <hr />
              <div className="applemacbook">
                Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2
                Chip / 256GB SSD / 8GB RAM) - French
              </div>

              <div className="addtocard">
                <button className="addtocardbtn">
                  <SlBasket />
                  Add to cart
                </button>
                <IoHeartOutline className="IoHeartOutline" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="products-block-card">
              <Link to="/Laptopsinfo">
                <img src={macbuk} alt="" />
              </Link>
              <hr />
              <div className="applemacbook">
                Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2
                Chip / 256GB SSD / 8GB RAM) - French
              </div>

              <div className="addtocard">
                <button className="addtocardbtn">
                  <SlBasket />
                  Add to cart
                </button>
                <IoHeartOutline className="IoHeartOutline" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="products-block-card">
              <Link to="/Laptopsinfo">
                <img src={macbuk} alt="" />
              </Link>
              <hr />
              <div className="applemacbook">
                Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2
                Chip / 256GB SSD / 8GB RAM) - French
              </div>

              <div className="addtocard">
                <button className="addtocardbtn">
                  <SlBasket />
                  Add to cart
                </button>
                <IoHeartOutline className="IoHeartOutline" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="products-block-card">
              <Link to="/Laptopsinfo">
                <img src={macbuk} alt="" />
              </Link>
              <hr />
              <div className="applemacbook">
                Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2
                Chip / 256GB SSD / 8GB RAM) - French
              </div>

              <div className="addtocard">
                <button className="addtocardbtn">
                  <SlBasket />
                  Add to cart
                </button>
                <IoHeartOutline className="IoHeartOutline" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="products-block-card">
              <Link to="/Laptopsinfo">
                <img src={macbuk} alt="" />
              </Link>
              <hr />
              <div className="applemacbook">
                Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2
                Chip / 256GB SSD / 8GB RAM) - French
              </div>

              <div className="addtocard">
                <button className="addtocardbtn">
                  <SlBasket />
                  Add to cart
                </button>
                <IoHeartOutline className="IoHeartOutline" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
