import React, { useState, useEffect } from "react";
import "./third.css";
import { Link } from "react-router-dom";
import strelka from "../../../assets/images/strelka_trid.png"
import { FaStar } from "react-icons/fa6";


const Third = () => {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [activeButtons, setActiveButtons] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
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
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setFilter(() => json); // Используйте функцию обратного вызова
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error :", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filteredData = [...filter]; // Создайте копию массива filter

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

      <div className="custom-container">

        <div className="custom-left">
          <h1 className="custom-left-h1">Products On Sale</h1>
          <h2 className="custom-left-h2">Shop Now!</h2>
          <Link to="/all">
            <button className="custom-left-btn">  View all <img src={strelka} alt="" /></button>
            </Link>
        </div>

        <>
          <ul className="custom-card-block">
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
    <div className="custom-third">
      <li className="custom-cards">

        <Link to={`/product/${item.id}`}>
          <div className="skidka">-50%</div>
          <img className="custom-card-img" src={item.image} alt={item.title} />
        </Link>
        <h3 className="custom-card-title">{item.title}</h3>
        <p className="custom-card-description">{item.description}</p>
        <div className="price">
          <p className="custom-card-price">${item.price}</p>
          <p className="custom-card-price"><FaStar className="custom-card-price-star" /> 4.5</p>
        </div>







        {/* <div className="custom-card-btns">
          <button
            className={`custom-card-btn1 ${activeButtons[item.id] ? "active" : ""}`}
            onClick={() => handleButtonClick(item.id)}
          >
            <GrFavorite />
          </button>
          <button
            className={`custom-card-btn2 ${activeButtons[item.id] ? "active" : ""}`}
            onClick={() => handleButtonClick(item.id)}
          >
            <BiSolidCartDownload />
          </button>
        </div> */}
      </li>
    </div>
  );
};

export default Third;
