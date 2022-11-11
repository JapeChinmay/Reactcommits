import "./NewExpesne.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

function NewExpesne(props) {
  const [shown, isShown] = useState(false);
  const SaveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const startShowing = () => {
    isShown(true);
  };

  const stopShowing = () => {
    isShown(false);
  };

  return (
    <div className="new-expense">
      {!shown && <button onClick={startShowing}>Add New Expense</button>}
      {shown && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDateHandler}
          onCancel={stopShowing}
        />
      )}
    </div>
  );
}

export default NewExpesne;
