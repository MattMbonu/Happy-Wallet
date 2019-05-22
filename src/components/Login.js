import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const Login = props => (
  <div>
    <p>Login with your google account to get started!</p>
    <button onClick={props.startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});
export default connect(
  undefined,
  mapDispatchToProps
)(Login);
