import "./ExpenseForm.css";
import React, { useState } from "react";

function ExpenseForm(props) {
  const [enteredTitle, SetEnteredTitle] = useState("");
  const [enteredAmount, SetEnteredAmount] = useState("");
  const [enteredDate, SetEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    //console.log(event.target.value);
    SetEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    SetEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    SetEnteredDate(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    SetEnteredAmount("");
    SetEnteredTitle("");
    SetEnteredDate("");
  };
  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense-control">
          <label>title</label>
          <input
            type="text"
            vlaue={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense-control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense-control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2025-12-30"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={props.onCancel}>
          cancel
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
