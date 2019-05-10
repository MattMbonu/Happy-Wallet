import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Happy Wallet</h1>
    <p>welcome to the happiest place on earth... for your bank account!</p>
    <NavLink exact={true} activeClassName="is-active" to="/">
      Dashboard
    </NavLink>{" "}
    <NavLink activeClassName="is-active" to="/create">
      Create an Expense
    </NavLink>
    <NavLink activeClassName="is-active" to="/help">
      Help
    </NavLink>
  </header>
);

export default Header;
