import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import { ExpenseItem } from "./ExpenseItem";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [mySelectedYear, setSelectedYear] = useState("2019");
  let infoText = "2020, 2021, 2022";

  if (mySelectedYear === "2020") {
    infoText = "2019, 2021, 2022";
  } else if (mySelectedYear === "2021") {
    infoText = "2019, 2020, 2022";
  } else if (mySelectedYear === "2022") {
    infoText = "2019, 2020, 2021";
  }

  // gets data from expenseFilter component (child)
  const getData = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  // filtering expenses
  const filteredExpenses = props.expenses.filter((filterExpense) => {
    return mySelectedYear === filterExpense.date.getFullYear().toString();
  });

  return (
    <div className="expenses ">
      <ExpensesFilter
        selectedYear={mySelectedYear}
        // send function to ExpenseFilter component (child)
        onGetData={getData}
      ></ExpensesFilter>

      <p>The data for years {infoText} is hidden.</p>

      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </div>
  );
}
