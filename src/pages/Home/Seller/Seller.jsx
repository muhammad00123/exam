import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiSolidCartDownload } from "react-icons/bi";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";

import "./seller.css"

const Seller = () => {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [activeButtons, setActiveButtons] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((json) => {
        setFilter(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error :", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filteredData = [...filter];

    if (selectedCategory) {
      filteredData = filteredData.filter(
        (item) => item.category === selectedCategory
      );
    }
    if (search.trim() !== "") {
      filteredData = filteredData.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilter(filteredData);
  }, [selectedCategory, search]);

  const handleSearch = (value) => {
    setSearch(value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleButtonClick = (id) => {
    setActiveButtons((prevActiveButtons) => ({
      ...prevActiveButtons,
      [id]: !prevActiveButtons[id],
    }));
  };

  return (
    <section>
      <div className="container">
        <div className="seller__info">{/* Filter Options */}</div>
        <div className="seller_h1_start">
            <h1 className="seller_h1">New Products</h1>


            <Link to="/all">
              <button className="seller__info__btn">
                View all 
                <MdOutlineNavigateNext />
              </button>
            </Link>
          </div>
          <hr className="seller__hr" />
     
          <>
            <ul className="seller__card__blocks">
              {filter.map((item) => (
                <Card
                  key={item.id}
                  item={item}
                  activeButtons={activeButtons}
                  handleButtonClick={handleButtonClick}
                />
              ))}
            </ul>
          </>
    
      </div>
    </section>
  );
};

const Card = ({ item, activeButtons, handleButtonClick }) => {
  return (
    <li className="seller__card">
      <Link to={`/product/${item.id}`}>
        <img className="seller__card__img" src={item.image} alt={item.title} />
      </Link>
      <h3 className="seller__card__title">{item.title}</h3>
      {/* <div className="seller__card__btns">
        <button
          className={`seller__card__btn1 ${activeButtons[item.id] ? "active" : ""}`}
          onClick={() => handleButtonClick(item.id)}
        >
          <GrFavorite />
        </button>
        <button
          className={`seller__card__btn2 ${activeButtons[item.id] ? "active" : ""}`}
          onClick={() => handleButtonClick(item.id)}
        >
          <BiSolidCartDownload />
        </button>
      </div> */}
    </li>
  );
};

export default Seller;
