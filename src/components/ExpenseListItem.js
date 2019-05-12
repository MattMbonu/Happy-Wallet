import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

export const ExpenseListItem = props => {
  return (
    <div>
      <Link to={`/edit/${props.id}`}>
        <h1>{props.description}</h1>
      </Link>
      <h2>
        {numeral(props.amount / 100).format("$0,0.00")}- Date:
        {moment(props.createdAt).format("MMMM Do, YYYY")}
      </h2>
    </div>
  );
};

export default connect()(ExpenseListItem);
