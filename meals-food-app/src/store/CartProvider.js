import CartContext from "./cart-context";
import React, { useReducer } from "react";

/////////////////////////////////////////////////

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADDITEMTOCART") {
    const updatedItems = state.items.concat(action.item);

    const updatedAmount =
      state.totalAmount + action.itme.price * action.item.amount;

    return {
      itmes: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADDITEMTOCART",
      item: item,
    });
  };

  const removeItemToCartHandler = (id) => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,

    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
