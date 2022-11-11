import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function Expesnes(props) {
  const [filteredYear, SetFilteredYear] = useState("2022");

  const selectedYearHandler = (selectedYear) => {
    SetFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={selectedYearHandler}
        />

        <ExpensesChart expenses={filteredExpenses} />

        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expesnes;
