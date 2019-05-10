import React, { Component } from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setTextFilters,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../actions/Filters";

class ExpenseListFilters extends Component {
  state = {
    calendarFocus: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = calendarFocus => this.setState(() => ({ calendarFocus }));
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={e => this.props.dispatch(setTextFilters(e.target.value))}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            e.target.value === "amount"
              ? this.props.dispatch(sortByAmount())
              : this.props.dispatch(sortByDate());
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocus}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ filters: state.filters });
export default connect(mapStateToProps)(ExpenseListFilters);
