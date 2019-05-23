import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const Login = props => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Happy Wallet</h1>
      <p>Ready to finally get a handle on your Finances!</p>
      <button onClick={props.startLogin} className="button">
        Login with Google!
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});
export default connect(
  undefined,
  mapDispatchToProps
)(Login);
