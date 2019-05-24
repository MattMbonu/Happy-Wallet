import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="content-container">
      <h1>Welcome to Happy Wallet</h1>
      <p>Let's get started!</p>
      <div>
        <h3>Manage Your Expenses</h3>
        <Link className="button" to="/dashboard">
          Expense Dashboard
        </Link>
      </div>

      <div>
        <h3>Keep Track of Your Earnings</h3>
        <Link className="button" to="/earnings/dashboard">
          Check Out Your Earnings
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
