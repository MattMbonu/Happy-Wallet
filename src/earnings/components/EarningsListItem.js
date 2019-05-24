import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const EarningsListItem = props => {
  return (
    <Link className="list-item" to={`/edit/${props.id}`}>
      <div>
        <h3 className="list-item__title">{props.description}</h3>
        <span className="list-item__subtitle">
          Date: {moment(props.createdAt).format("MMMM Do, YYYY")}
        </span>{" "}
        <span className="list-item__subtitle">{props.note}</span>
      </div>

      <h3 className="list-item__amount">
        {numeral(props.amount / 100).format("$0,0.00")}{" "}
      </h3>
    </Link>
  );
};

export default EarningsListItem;
