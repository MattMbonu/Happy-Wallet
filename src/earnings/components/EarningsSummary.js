import React from "react";
import { Link } from "react-router-dom";

const EarningsSummary = () => {
  return (
    <div>
      <p>this is my summary</p>
      <Link className="button" to="/earnings/create">
        Add Earnings
      </Link>{" "}
      <Link className="button button--list" to="/dashboard">
        Switch to Expenses
      </Link>
    </div>
  );
};

export default EarningsSummary;
