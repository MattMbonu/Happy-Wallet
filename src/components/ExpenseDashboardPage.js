import React from "react";
import ConnectedExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const ExpenseDashboardPage = () => (
  <div>
    <p>this is my expenses Dashboard</p>
    <ExpenseListFilters />
    <ConnectedExpenseList />
  </div>
);

export default ExpenseDashboardPage;
