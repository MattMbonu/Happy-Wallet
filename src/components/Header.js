import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
  <header>
    <h1>Happy Wallet</h1>
    <p>welcome to the happiest place on earth... for your bank account!</p>
    <NavLink activeClassName="is-active" to="/dashboard">
      Dashboard
    </NavLink>{" "}
    <NavLink activeClassName="is-active" to="/create">
      Create an Expense
    </NavLink>
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});
export default connect(
  undefined,
  mapDispatchToProps
)(Header);
