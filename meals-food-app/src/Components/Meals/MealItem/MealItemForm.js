import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [isValid, setIsValid] = useState(true);
  const amountInputref = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputref.current.value;
    const enteredAmountNum = +enteredAmount;

    if (
      enteredAmount.trim() === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 10
    ) {
      setIsValid(false);

      return;
    }

    props.onAddToCart(enteredAmountNum);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputref}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          default: "1",
        }}
      />
      <button>Add</button>
      {!isValid && <p>Please Enter Valid Amount</p>}
    </form>
  );
};

export default MealItemForm;
