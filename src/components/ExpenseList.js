import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";
import { Link } from "react-router-dom";

export const ExpenseList = props => (
  <div>
    {props.expenses.length === 0 ? (
      <p>
        no expenses click{" "}
        <Link to="/create" exact={true}>
          here
        </Link>{" "}
        to create a new expense
      </p>
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
);

const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters)
});
export default connect(mapStateToProps)(ExpenseList);
