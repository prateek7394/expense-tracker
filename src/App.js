import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "New Desk",
    amount: 600,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "AC", amount: 19000, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Chair",
    amount: 300,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "LED TV",
    amount: 15000,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
