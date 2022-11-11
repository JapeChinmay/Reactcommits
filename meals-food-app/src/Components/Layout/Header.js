import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButtonButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>meals</h1>
        <button>
          <HeaderCartButtonButton onClick={props.onShowCart} />
        </button>
      </header>

      <div className={classes["main-image"]}>
        <img
          src="https://wallpaperaccess.com/full/1699077.jpg"
          alt="food banner"
        />
      </div>
    </Fragment>
  );
};

export default Header;
