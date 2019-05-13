import React from "react";
import ConnectedExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ConnectedExpenseSummary from "./ExpensesSummary";

const ExpenseDashboardPage = () => (
  <div>
    <p>this is my expenses Dashboard</p>
    <ConnectedExpenseSummary />
    <ExpenseListFilters />
    <ConnectedExpenseList />
  </div>
);

export default ExpenseDashboardPage;
