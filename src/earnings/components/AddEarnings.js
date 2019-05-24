import React, { Component } from "react";
import { connect } from "react-redux";
import ExpenseForm from "../../components/ExpenseForm";
import { startAddEarning } from "../../actions/earnings";

export class AddEarnings extends Component {
  onSubmit = earning => {
    this.props.startEarning(earning);
    this.props.history.push("/earnings/dashboard");
  };
  render() {
    console.log(this.props.startEarning);
    return (
      <div>
        <h1>Add Earnings</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispactchToProps = dispatch => {
  return {
    startEarning: earning => dispatch(startAddEarning(earning))
  };
};

export default connect(
  undefined,
  mapDispactchToProps
)(AddEarnings);
