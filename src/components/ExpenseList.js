import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

import { Link } from "react-router-dom";

export const ExpenseList = props => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {props.expenses.length === 0 ? (
        <div className="list-item list-item--message">
          <span>
            no expenses click <Link to="/create">here</Link> to create a new
            expense
          </span>
        </div>
      ) : (
        props.expenses.map(expense => (
          <ExpenseListItem
            key={expense.id}
            description={expense.description}
            amount={expense.amount}
            createdAt={expense.createdAt}
            id={expense.id}
          />
        ))
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters)
});
export default connect(mapStateToProps)(ExpenseList);
