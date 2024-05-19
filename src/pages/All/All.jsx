import React, { useEffect, useState } from "react";
import { BiSolidCartDownload } from "react-icons/bi";
import { GrFavorite } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import "./all.css";

const All = () => {
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setDatas(json);
        setFilter(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filteredData = datas;
    if (search.trim() !== "") {
      filteredData = filteredData.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilter(filteredData);
  }, [search, datas]);


  return (
    <div className="container">
      <div className="search__wrapper">
        <input 
          type="text" 
          placeholder="Search" 
          className="input__search" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
        <CiSearch className="search__icon"/>
      </div>
      {loading ? (
        <center>Loading...</center>
      ) : (
        <ul className="all">
          {filter.length ? (
            filter.map((item) => (
              <li className="all__card" key={item.id}>
                <img className="all__img" src={item.image} alt={item.title} /><hr />
                <h3 className="all__title">{item.title}</h3>
                <p className="all__description">{item.description}</p>
                <p className="all__price">{item.price}</p>
                <div className="all__btns">
                  <button className="all__btn1">
                    <GrFavorite />
                  </button>
                  <button className="all__btn2">
                    <BiSolidCartDownload />
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p>No results found</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default All;
