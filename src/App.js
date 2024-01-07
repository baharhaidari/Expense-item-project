import React from "react";
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/New Expense/NewExpense";

export const INITIAL_EXPENSES = [
  {
    id: "p1",
    title: "Laptop Lenovo",
    amount: 300.5,
    date: new Date(2021, 8, 11),
  },

  {
    id: "p2",
    title: "Door",
    amount: 219,
    date: new Date(2021, 1, 10),
  },

  {
    id: "p3",
    title: "Fridge",
    amount: 294.67,
    date: new Date(2022, 5, 22),
  },

  {
    id: "p4",
    title: "Printer",
    amount: 300,
    date: new Date(2019, 4, 11),
  },
];

function App() {
  const [expenses, setNewExpenses] = useState(INITIAL_EXPENSES);

  const saveNewData = (newExpense) => {
    setNewExpenses([newExpense, ...expenses]);
    console.log(newExpense);
  };
  return (
    <div>
      <NewExpense onSaveNewExpenseData={saveNewData}></NewExpense>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
