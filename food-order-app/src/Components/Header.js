import React, { Fragment } from "react";
import classes from "./Components/Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header>
        <h1>Meals</h1>
        <button>cart</button>
      </header>
      <div>
        <img
          src="https://wallpaperaccess.com/full/1699077.jpg"
          alt="Food banner"
        />
      </div>
    </Fragment>
  );
};

export default Header;
