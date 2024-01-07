import { useState } from "react";
import "./ExpenseForm.css";

// passed props as parameter to pass data to parent component
export default function ExpenseForm(props) {
  let [enteredTitle, setEnteredTitle] = useState("");
  let [enteredAmount, setEnteredAmount] = useState("");
  let [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const handleSubmitData = (event) => {
    event.preventDefault();

    // pass entered data in a obj
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // send data to parent
    props.onSaveExpenseData(expenseData);

    // clear inputs data
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={handleSubmitData}>
      <div className="new-expense__controls">
        {/* title input */}
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        {/* amount input */}
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        {/* date input */}
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-09"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      {/* submit button */}
      <div className="new-expense__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <input type="submit" value="Add Expense" />
      </div>
    </form>
  );
}

// passed entered title to dynamically change the value of each input using useState
// got the value
// cleared values
