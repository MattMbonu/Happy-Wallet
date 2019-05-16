import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./Routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { setExpenses } from "./actions/Expenses";
import "./firebase/firebase";

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const appRoot = document.getElementById("app");

ReactDOM.render(<p>Loading...</p>, appRoot);

store.dispatch(setExpenses()).then(() => {
  ReactDOM.render(jsx, appRoot);
});
