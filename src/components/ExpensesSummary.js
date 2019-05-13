import React from "react";
import numeral from "numeral";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";

const ExpensesSummary = props => (
  <div>
    <h1>
      Viewing: {props.expenses.length}{" "}
      {props.expenses.length === 1 ? "expense" : "expenses"} totalling{" "}
      {numeral(props.expensesTotal / 100).format("$0,0.00")}
    </h1>
  </div>
);

const mapStateToProps = state => {
  const selectedExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenses: selectedExpenses,
    expensesTotal: selectExpensesTotal(selectedExpenses)
  };
};
export default connect(mapStateToProps)(ExpensesSummary);
