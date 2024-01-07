import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export const ExpenseItem = ({ date, title, amount }) => {
  let [newTitle, setTitle] = useState(title);

  const handleClick = () => {
    setTitle("Updated");
  };

  return (
    <li>
      <div className="expense-item">
        <ExpenseDate date={date}></ExpenseDate>

        <div className="expense-item__description">
          <h2>{newTitle}</h2>
          <div className="expense-item__price">{amount}</div>
        </div>

        <button onClick={handleClick}>Change title</button>
      </div>
    </li>
  );
};
