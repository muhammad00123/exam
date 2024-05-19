import React from "react";
import { Hero } from "./Hero/Hero";
import Third from "./Third/Third";
import Second from "./Second/Second";
import Fourth from "./Fourth/Fourth";
import { Advertising } from "./Advertising/Advertising";
import { Brend } from "./Brend/Brend";
import Seller from "./Seller/Seller";
import { Smart } from "./Smart/Smart";
import { Blog } from "./Blogs/Blog";
import { About } from "./About/About";
// import Fourth from "./Fourth/Fourth";

function Home() {
  return (
    <div>
      <div className="container">
        <Hero />
        <Second />
        <Third />
        <Fourth />
        <Advertising />
        <Seller />
        <Brend />
        <Smart />
        <Blog />
        <About />
      </div>
    </div>
  );
}

export default Home;
