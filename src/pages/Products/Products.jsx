import React from "react";
import { Link } from "react-router-dom";
import { GrNext } from "react-icons/gr";
import { GoDeviceMobile } from "react-icons/go";
import { CgScreen } from "react-icons/cg";
import { BsTabletLandscape } from "react-icons/bs";
import { LuHeadphones } from "react-icons/lu";
import { TbDeviceWatchStats } from "react-icons/tb";
import { TbCamera } from "react-icons/tb";
import { GrGamepad } from "react-icons/gr";
import { IoGitNetworkOutline } from "react-icons/io5";
import { PiSunDimBold } from "react-icons/pi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import macbuk from "../../assets/images/macbuk.png"
import "./products.css"
import { SlBasket } from "react-icons/sl";
import { IoHeartOutline } from "react-icons/io5";
import aipots from "../../assets/images/aipots.png"
import { FaArrowRightLong } from "react-icons/fa6";


function valuetext(value) {
  return `${value}°C`;
}
function Products() {

  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="container">
        <div className="products">
          <div className="products-home">
            <h1 className='products-homeh1' >
              <Link to="/">Home</Link>
            </h1>
            <GrNext />
            <h2 className='products-productsh2'>Products</h2>
          </div>
          <div className="products-categories">
            <div className="products-categories-tehnik">
              <GoDeviceMobile className='godevicemobile' />
              <h1 className='mobile-godevicemobile'>Mobile</h1>
            </div>

            <div className="products-categories-tehnik">
              <CgScreen className='godevicemobile' />
              <h1 className='mobile-godevicemobile'>Laptop</h1>
            </div>

            <div className="products-categories-tehnik">
              <BsTabletLandscape className='godevicemobile' />
              <h1 className='mobile-godevicemobile'>Tablet</h1>
            </div>

            <div className="products-categories-tehnik">
              <LuHeadphones className='godevicemobile' />
              <h1 className='mobile-godevicemobile'>Audio</h1>
            </div>

            <div className="products-categories-tehnik">
              < TbDeviceWatchStats className='godevicemobile' />
              <h1 className='mobile-godevicemobile'>Wearable</h1>
            </div>

            <div className="products-categories-tehnik">
              < TbCamera className='godevicemobile' />
              <h1 className='mobile-godevicemobile'>Camera</h1>
            </div>

            <div className="products-categories-tehnik">
              <GrGamepad className='godevicemobile' />
              <h1 className='mobile-godevicemobile'>Gaming</h1>
            </div>

            <div className="products-categories-tehnik">
              <IoGitNetworkOutline className='godevicemobile' />
              <h1 className='mobile-godevicemobile'>Network</h1>
            </div>

            <div className="products-categories-tehnik">
              <PiSunDimBold className='godevicemobile' />
              <h1 className='mobile-godevicemobile'>Accessories</h1>
            </div>
          </div>
          <div className="products-chips-start">
            <div className="chips">
              <h2 className='silver'>Silver</h2>
              <IoIosCloseCircleOutline className='IoIosCloseCircleOutline' />
            </div>

            <div className="chips">
              <h2 className='silver'>Silver</h2>
              <IoIosCloseCircleOutline className='IoIosCloseCircleOutline' />
            </div>

            <div className="chips">
              <h2 className='silver'>Silver</h2>
              <IoIosCloseCircleOutline className='IoIosCloseCircleOutline' />
            </div>

            <div className="chips">
              <h2 className='silver'>Silver</h2>
              <IoIosCloseCircleOutline className='IoIosCloseCircleOutline' />
            </div>

            <div className="chips">
              <h2 className='silver'>Silver</h2>
              <IoIosCloseCircleOutline className='IoIosCloseCircleOutline' />
            </div>
          </div>
          <div className="products-filters">
            <div className="products-block1">

              <div className="clear">
                <h1 className='products-h1-filters'>Filters</h1>
                <button className='products-filters-clear'>Clear all</button>
              </div>



              <div className="brands-menu">
                <button className="brands-menu-btn" >
                  Brands
                </button >
                <div className="brands-menu-list">
                  <ul>
                    <li className="li-filter" >
                      <label className="label">
                        <input className="checked" type="checkbox" /> Asus<li>(128)</li></label>
                    </li>
                    <li className="li-filter" >
                      <label className="label">
                        <input type="checkbox" /> Acer<li>(128)</li></label>
                    </li>
                    <li className="li-filter" >
                      <label className="label">
                        <input type="checkbox" />Apple<li>(128)</li></label>
                    </li>
                    <li className="li-filter" >
                      <label className="label">
                        <input type="checkbox" />Dell<li>(128)</li> </label>
                    </li>
                  </ul>
                </div>
              </div>


              <div className="brands-menu-e">
                <button className="brands-menu-btn" >
                  Brands
                </button >

              </div>
              <div className="switch">
                <h1>Discount</h1>
                <FormGroup>
                  <FormControlLabel control={<Switch defaultChecked />} />
                </FormGroup>
              </div>

              <div className="boxslider">
                <h1>Price</h1>
                <div className="price-minmax">
                  <input className="min" placeholder="min." />
                  <input className="max" placeholder="max." />
                </div>
                <div className="slider-price">
                  <Box sx={{ width: 240 }}>
                    <Slider

                      getAriaLabel={() => 'Temperature range'}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                    />
                  </Box>
                </div>
              </div>
              <div className="brands-menu">
                <button className="brands-menu-btn" >
                  Brands
                </button >
                <div className="brands-menu-list">
                  <ul>
                    <li className="li-filter" >
                      <label className="label">
                        <input className="checked" type="checkbox" /> Asus<li>(128)</li></label>
                    </li>
                    <li className="li-filter" >
                      <label className="label">
                        <input type="checkbox" /> Acer<li>(128)</li></label>
                    </li>
                    <li className="li-filter" >
                      <label className="label">
                        <input type="checkbox" />Apple<li>(128)</li></label>
                    </li>
                    <li className="li-filter" >
                      <label className="label">
                        <input type="checkbox" />Dell<li>(128)</li> </label>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="brands-menu">
                <button className="brands-menu-btn" >
                  Brands
                </button >
                <div className="brands-menu-list">
                  <ul>
                    <li className="li-filter" >
                      <label className="label">
                        <input className="checked" type="checkbox" /> Asus<li>(128)</li></label>
                    </li>
                    <li className="li-filter" >
                      <label className="label">
                        <input type="checkbox" /> Acer<li>(128)</li></label>
                    </li>
                    <li className="li-filter" >
                      <label className="label">
                        <input type="checkbox" />Apple<li>(128)</li></label>
                    </li>
                    <li className="li-filter" >
                      <label className="label">
                        <input type="checkbox" />Dell<li>(128)</li> </label>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="brands-menu">
                <button className="brands-menu-btn" >
                  Brands
                </button >
                <div className="brands-menu-list">
                  <ul>
                    <li className="li-filter" >
                      <label className="label">
                        <input className="checked" type="checkbox" /> Asus<li>(128)</li></label>
                    </li>
                    <li className="li-filter" >
                      <label className="label">
                        <input type="checkbox" /> Acer<li>(128)</li></label>
                    </li>
                    <li className="li-filter" >
                      <label className="label">
                        <input type="checkbox" />Apple<li>(128)</li></label>
                    </li>
                    <li className="li-filter" >
                      <label className="label">
                        <input type="checkbox" />Dell<li>(128)</li> </label>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="brands-menu">
                <button className="brands-menu-btn" >
                  Brands
                </button >
                <div className="brands-menu-list">
                  <ul>
                    <li className="li-filter" >
                      <label className="label">
                        <input className="checked" type="checkbox" /> Asus<li>(128)</li></label>
                    </li>
                    <li className="li-filter" >
                      <label className="label">
                        <input type="checkbox" /> Acer<li>(128)</li></label>
                    </li>
                    <li className="li-filter" >
                      <label className="label">
                        <input type="checkbox" />Apple<li>(128)</li></label>
                    </li>
                    <li className="li-filter" >
                      <label className="label">
                        <input type="checkbox" />Dell<li>(128)</li> </label>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="brands-menu">
                <button className="brands-menu-btn" >
                  Brands
                </button >
                <div className="brands-menu-list">
                  <ul>
                    <li className="li-filter" >
                      <label className="label">
                        <input className="checked" type="checkbox" /> Asus<li>(128)</li></label>
                    </li>
                    <li className="li-filter" >
                      <label className="label">
                        <input type="checkbox" /> Acer<li>(128)</li></label>
                    </li>
                    <li className="li-filter" >
                      <label className="label">
                        <input type="checkbox" />Apple<li>(128)</li></label>
                    </li>
                    <li className="li-filter" >
                      <label className="label">
                        <input type="checkbox" />Dell<li>(128)</li> </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="products-block2">
              <div className="products-block-cards">
                <div className="products-block-card">
                  <Link to="/Laptopsinfo">
                    <img src={macbuk} alt="" />
                    </Link>
                  <hr />
                  <div className="applemacbook">Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French</div>

                  <div className="addtocard">
                    <button className="addtocardbtn">
                      <SlBasket />
                      Add to cart

                    </button>
                    <IoHeartOutline className="IoHeartOutline" />
                  </div>
                </div>

                <div className="products-block-card">
                  <img src={macbuk} alt="" />
                  <hr />
                  <div className="applemacbook">Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French</div>

                  <div className="addtocard">
                    <button className="addtocardbtn">
                      <SlBasket />
                      Add to cart

                    </button>
                    <IoHeartOutline className="IoHeartOutline" />
                  </div>
                </div>

                <div className="products-block-card">
                  <img src={macbuk} alt="" />
                  <hr />
                  <div className="applemacbook">Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French</div>

                  <div className="addtocard">
                    <button className="addtocardbtn">
                      <SlBasket />
                      Add to cart

                    </button>
                    <IoHeartOutline className="IoHeartOutline" />
                  </div>
                </div>


              </div>

              <div className="products-block-cards">
                <div className="products-block-card">
                  <img src={macbuk} alt="" />
                  <hr />
                  <div className="applemacbook">Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French</div>

                  <div className="addtocard">
                    <button className="addtocardbtn">
                      <SlBasket />
                      Add to cart

                    </button>
                    <IoHeartOutline className="IoHeartOutline" />
                  </div>
                </div>

                <div className="products-block-card">
                  <img src={macbuk} alt="" />
                  <hr />
                  <div className="applemacbook">Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French</div>

                  <div className="addtocard">
                    <button className="addtocardbtn">
                      <SlBasket />
                      Add to cart

                    </button>
                    <IoHeartOutline className="IoHeartOutline" />
                  </div>
                </div>

                <div className="products-block-card">
                  <img src={macbuk} alt="" />
                  <hr />
                  <div className="applemacbook">Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French</div>

                  <div className="addtocard">
                    <button className="addtocardbtn">
                      <SlBasket />
                      Add to cart

                    </button>
                    <IoHeartOutline className="IoHeartOutline" />
                  </div>
                </div>


              </div>

              <div className="products-block-cards">
                <div className="products-block-card">
                  <img src={macbuk} alt="" />
                  <hr />
                  <div className="applemacbook">Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French</div>

                  <div className="addtocard">
                    <button className="addtocardbtn">
                      <SlBasket />
                      Add to cart

                    </button>
                    <IoHeartOutline className="IoHeartOutline" />
                  </div>
                </div>

                <div className="products-block-card">
                  <img src={macbuk} alt="" />
                  <hr />
                  <div className="applemacbook">Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French</div>

                  <div className="addtocard">
                    <button className="addtocardbtn">
                      <SlBasket />
                      Add to cart

                    </button>
                    <IoHeartOutline className="IoHeartOutline" />
                  </div>
                </div>

                <div className="products-block-card">
                  <img src={macbuk} alt="" />
                  <hr />
                  <div className="applemacbook">Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French</div>

                  <div className="addtocard">
                    <button className="addtocardbtn">
                      <SlBasket />
                      Add to cart

                    </button>
                    <IoHeartOutline className="IoHeartOutline" />
                  </div>
                </div>


              </div>
              <div className="iphon-img">
                <div className="iphon-img-left">
                  <div className="iphon">
                    <div className="iphon-grey">
                      <h1>iPhone 13 Pro Max Sale!</h1>
                      <p>Get Yours Now and Enjoy.Limited <br /> Time Offer: Save 40% on the <br /> Ultimate Tech Upgrade!</p>
                      <div className="iphon-grey-btn-btn">
                        <button className="iphon-grey-btn">Shop Now</button>
                      </div>
                      <button className="iphon-grey-btn2"> www.techheim.com</button>
                    </div>
                  </div>
                  <div className="iphon-right">
                    <img src={aipots} />
                    <div className="iphon-right-oreng">
                      <div className="iphon-right-text">
                        <h1>Limited Time Offer</h1>
                        <p>Elevate Your Audio <br />
                          Experience with <br />
                          AirPods Pro.</p>
                        <button className="iphon-oreng-btn">Shop Now</button>


                      </div>
                      <button className="www-btn">www.techheim.com</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-block-cards">
                <div className="products-block-card">
                  <img src={macbuk} alt="" />
                  <hr />
                  <div className="applemacbook">Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French</div>

                  <div className="addtocard">
                    <button className="addtocardbtn">
                      <SlBasket />
                      Add to cart

                    </button>
                    <IoHeartOutline className="IoHeartOutline" />
                  </div>
                </div>

                <div className="products-block-card">
                  <img src={macbuk} alt="" />
                  <hr />
                  <div className="applemacbook">Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French</div>

                  <div className="addtocard">
                    <button className="addtocardbtn">
                      <SlBasket />
                      Add to cart

                    </button>
                    <IoHeartOutline className="IoHeartOutline" />
                  </div>
                </div>

                <div className="products-block-card">
                  <img src={macbuk} alt="" />
                  <hr />
                  <div className="applemacbook">Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French</div>

                  <div className="addtocard">
                    <button className="addtocardbtn">
                      <SlBasket />
                      Add to cart

                    </button>
                    <IoHeartOutline className="IoHeartOutline" />
                  </div>
                </div>


              </div>

              <div className="products-block-cards">
                <div className="products-block-card">
                  <img src={macbuk} alt="" />
                  <hr />
                  <div className="applemacbook">Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French</div>

                  <div className="addtocard">
                    <button className="addtocardbtn">
                      <SlBasket />
                      Add to cart

                    </button>
                    <IoHeartOutline className="IoHeartOutline" />
                  </div>
                </div>

                <div className="products-block-card">
                  <img src={macbuk} alt="" />
                  <hr />
                  <div className="applemacbook">Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French</div>

                  <div className="addtocard">
                    <button className="addtocardbtn">
                      <SlBasket />
                      Add to cart

                    </button>
                    <IoHeartOutline className="IoHeartOutline" />
                  </div>
                </div>

                <div className="products-block-card">
                  <img src={macbuk} alt="" />
                  <hr />
                  <div className="applemacbook">Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French</div>

                  <div className="addtocard">
                    <button className="addtocardbtn">
                      <SlBasket />
                      Add to cart

                    </button>
                    <IoHeartOutline className="IoHeartOutline" />
                  </div>
                </div>


              </div>
              <div className="list-products">
                <div className="list-pro">1</div>
                <div className="list-pro">2</div>
                <div className="list-pro">3</div>
                <div className="list-proo">4</div>
                <div className="list-pro">...</div>
                <FaArrowRightLong />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Products