import { ExpenseItem } from "./ExpenseItem";
import "./ExpensesList.css";

export default function ExpensesList(props) {
  let expenseData = <p>No data exists!</p>;

  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">data not found!</h2>;
  }

  if (props.filteredExpenses.length > 0) {
    return (
      <ul className="expenses-list">
        {
          (expenseData = props.filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
            />
          )))
        }
      </ul>
    );
  }
}
