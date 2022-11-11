import { Fragment, useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButtonButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfcartItems = cartCtx.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);
  return (
    <Fragment>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>YOur Cart</span>
        <span className={classes.badge}>{numberOfcartItems}</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButtonButton;
