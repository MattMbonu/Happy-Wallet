import React, { Component } from "react";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/Expenses";
import { connect } from "react-redux";

export class AddExpensePage extends Component {
  onSubmit = expense => {
    this.props.startAddExpense(expense);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h1>This is my Create Expense Page page!!</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispactchToProps = dispatch => {
  return {
    startAddExpense: expense => dispatch(startAddExpense(expense))
  };
};
export default connect(
  undefined,
  mapDispactchToProps
)(AddExpensePage);
