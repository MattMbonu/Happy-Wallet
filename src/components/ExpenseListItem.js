import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const ExpenseListItem = props => {
  return (
    <div>
      <Link to={`/edit/${props.id}`}>
        <h1>{props.description}</h1>
      </Link>
      <h2>
        {props.amount} Date:{props.createdAt}
      </h2>
    </div>
  );
};

export default connect()(ExpenseListItem);
