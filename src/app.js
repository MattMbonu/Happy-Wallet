import React from "react";
import ReactDOM from "react-dom";
import AppRouter, { history } from "./Routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import LoadingPage from "./components/LoadingPage";
import { setExpenses } from "./actions/Expenses";
import { startSetEarnings } from "./actions/earnings";
import { login, logout } from "./actions/auth";
import { firebase } from "./firebase/firebase";

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRenderened = false;
const appRoot = document.getElementById("app");

const renderApp = () => {
  if (!hasRenderened) {
    ReactDOM.render(jsx, appRoot);
    hasRenderened = true;
    return;
  }
};

ReactDOM.render(<LoadingPage />, appRoot);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store
      .dispatch(setExpenses())
      .then(() => store.dispatch(startSetEarnings()))
      .then(() => {
        renderApp();
        if (history.location.pathname === "/") {
          console.log("working");
          history.push("/welcome");
        }
      });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
