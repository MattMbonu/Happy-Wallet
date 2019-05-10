import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./Routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { removeExpense, editExpense, addExpense } from "./actions/Expenses";
import {
  setEndDate,
  setStartDate,
  setTextFilters,
  sortByAmount,
  sortByDate
} from "./actions/Filters";

import getVisibleExpenses from "./selectors/expenses";

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

store.dispatch(
  addExpense({
    description: "water bill",
    note: "bill for water",
    amount: 100,
    createdAt: 1
  })
);
store.dispatch(
  addExpense({
    description: "rent",
    note: "rent",
    amount: 5000,
    createdAt: 39
  })
);

store.dispatch(
  addExpense({
    description: "gas bill",
    note: "bill for gas",
    amount: 50,
    createdAt: 2
  })
);
store.dispatch(
  addExpense({
    description: "giraffe bill",
    note: "bill for giraffe",
    amount: 500000,
    createdAt: 3
  })
);
store.dispatch(
  addExpense({
    description: "cab bill",
    note: "bill for cab",
    amount: 5,
    createdAt: 400
  })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const appRoot = document.getElementById("app");
ReactDOM.render(jsx, appRoot);
