import "./App.css";
import Expesnes from "./components/Expenses/Expenses";
import NewExpesne from "./components/NewExpesne/NewExpesne";

import React, { useState } from "react";

const Dummy = [
  {
    id: "e1",
    title: "Bread",
    amount: 94.12,
    date: new Date(2022, 10, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New chair(Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

function App() {
  const [expensesOnList, SetExpensesOnList] = useState(Dummy);

  const addExpenseHandler = (expenseData) => {
    SetExpensesOnList((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpesne onAddExpense={addExpenseHandler} />
      <Expesnes expenses={expensesOnList} />;
    </div>
  );
  // passing expenses obj as named expenses.
  // props.expenses will be used to extract values.
}

export default App;
