import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  const [isOpen, setOpen] = useState(false);

  // getting data from ExpenseForm component
  const saveExpenseData = (data) => {
    const newExpense = { ...data, id: Math.random().toString() };
    props.onSaveNewExpenseData(newExpense);
    setOpen(false);
  };

  const handleIsOpen = () => {
    setOpen(isOpen ? false : true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="new-expense">
      {/* passed function to child (ExpenseForm) */}
      {!isOpen && <button onClick={handleIsOpen}>Add New Expense</button>}
      {isOpen && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancel={handleCancel}
        ></ExpenseForm>
      )}
    </div>
  );
}
