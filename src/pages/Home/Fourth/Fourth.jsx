import React, { useState, useEffect } from "react";
import "./fourth.css";
import { Link } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";


const Fourth = () => {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState([]);

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

  return (
    <section>
      <div className="container">
        <div className="new_start">
          <div className="new_h1_start">
            <h1 className="new_h1">New Products</h1>


            <Link to="/all">
              <button className="card__info__btn">
                View all
                <MdOutlineNavigateNext />
              </button>
            </Link>
          </div>
          <hr className="new_hr" />
          <ul className="card__blocks">
            {filter.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Card = ({ item }) => {
  return (
    <li className="card">
      <Link to={`/product/${item.id}`}>
        <img className="card__img" src={item.image} alt={item.title} />
      </Link>
      <h3 className="card__title">{item.title}</h3>
    </li>
  );
};

export default Fourth;
