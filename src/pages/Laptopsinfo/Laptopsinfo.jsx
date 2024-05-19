import React from "react";
import Breadcrumb from "./Breadcrumb/Breadcrumb";
import Macbook from "./Macbook/Macbook";
import "./laptopsinfo.css";
import { Technical } from "./Technical/Technical";
import Skroll from "./Skrollbar/Skroll";
import { Comment } from "./Comment/Comment";

export const Laptopsinfo = () => {
  return (
    <div>
      <div className="container">
        <Breadcrumb />
        <Macbook />
        <Technical />
        <Skroll />
        <Comment />
      </div>
    </div>
  );
};
