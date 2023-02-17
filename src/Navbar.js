import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import hero from "./hero-1.jpg";
import first from "./01.jpg";
import second from "./02.jpg";
import third from "./03.jpg";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
//import Sublinks from "./Sublinks";

const Navbar = () => {
  const [showlinks, setShowlinks] = useState(false);

  const toggleClick = () => {
    setShowlinks(true);
  };

  const toggleClose = () => {
    setShowlinks(false);
  };

  // if (showlinks) {
  //   return <Sublinks />;
  // }

  return (
    <div className={`${showlinks ? "container backdrop" : "container"}`}>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="logo" alt="logo" />
            <button className="nav-toggle" onClick={toggleClick}>
              <FaBars />
            </button>
          </div>
          <div className={`${showlinks ? "mob_tabs" : "tabs"}`}>
            <button className="cross" onClick={toggleClose}>
              <FaTimes />
            </button>
            <p>Home</p>
            <p>New</p>
            <p>Popular</p>
            <p>Trending</p>
            <p>Categories</p>
          </div>
        </div>
      </nav>
      <div className="flex_1">
        <div>
          <img src={hero} className="hero_1" />
          <div className="flex_2">
            <h1>The Bright Future of Web 3.0?</h1>
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
              <br />
              <button className="btn">Read more</button>
            </p>
          </div>
        </div>
        <div className="item_2">
          <h4>New</h4>
          <h6 ClassName="heading">Hydrogen VS Electric Cars</h6>
          <p className="content">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
          <hr className="line" />
          <h6 className="heading">The Downsides of AI Artistry </h6>
          <p className="content">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
          <hr />
          <h6 ClassName="heading">Is VC Funding Drying Up? </h6>
          <p className="content">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
      <div className="flex_3">
        <div className="flex_4 last_row">
          <img src={first} className="pics" />
          <div className="info">
            <h1>01</h1>
            <h3> Reviving Retro PCs </h3>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className="flex_4">
          <img src={second} className="pics" />
          <div className="info">
            <h1>02</h1>
            <h3> Top 10 Laptops of 2022 </h3>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className="flex_4">
          <img src={third} className="pics" />
          <div className="info">
            <h1>03</h1>
            <h3>The Growth of Gaming </h3>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
