import { Fragment } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButtonButton = (props) => {
  return (
    <Fragment>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>YOur Cart</span>
        <span className={classes.badge}>$3434</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButtonButton;
