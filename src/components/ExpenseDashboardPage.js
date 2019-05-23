import React from "react";
import ConnectedExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ConnectedExpenseSummary from "./ExpensesSummary";

const ExpenseDashboardPage = () => (
  <div>
    <ConnectedExpenseSummary />
    <ExpenseListFilters />
    <ConnectedExpenseList />
  </div>
);

export default ExpenseDashboardPage;
