import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  // sends data to expenses file, its parent component
  const onSelectionChange = (event) => {
    props.onGetData(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>

        <select onChange={onSelectionChange} value={props.selectedYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
