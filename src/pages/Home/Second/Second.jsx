import React, { useState, useEffect } from "react";
import "./second.css";
import { Link } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";
import { BiSolidCartDownload } from "react-icons/bi";
import { GrFavorite } from "react-icons/gr";

const Second = () => {
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
        <div className="second__card__info">{/* Filter Options */}</div>

        {loading ? (
          <center>{/* <img src={loadingImg} alt="Loading" /> */}</center>
        ) : (
          <>
            <ul className="second__card__blocks">
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
        )}
      </div>
    </section>
  );
};

const Card = ({ item, activeButtons, handleButtonClick }) => {
  return (
    <li className="card">
      <Link to={`/product/${item.id}`}>
        <img className="second__card__img" src={item.image} alt={item.title} />
      </Link>
      <h3 className="card__title">{item.title}</h3>
      {/* <p className="card__description">{item.description}</p> */}
      {/* <p className="card__price">{item.price}</p> */}
      
    </li>
  );
};

export default Second;
