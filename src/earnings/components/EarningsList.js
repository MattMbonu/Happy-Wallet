import React from "react";
import { connect } from "react-redux";
import EarningsListItem from "./EarningsListItem";

const EarningsList = props => {
  return (
    <div>
      {props.earnings.map(earning => (
        <EarningsListItem
          key={earning.id}
          description={earning.description}
          amount={earning.amount}
          createdAt={earning.createdAt}
          id={earning.id}
          note={earning.note}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({ earnings: state.earnings });
export default connect(mapStateToProps)(EarningsList);
