import {
  setEndDate,
  setStartDate,
  sortByDate,
  sortByAmount,
  setTextFilters
} from "../../actions/Filters";
import moment from "moment";

test("should set start date", () => {
  const date = moment();
  const result = setStartDate(date);
  expect(result).toEqual({ type: "SET_START_DATE", date });
});

test("should set end date", () => {
  const result = setEndDate(moment(0));
  expect(result).toEqual({ type: "SET_END_DATE", date: moment(0) });
});

test("should return an action with a sort by date set", () => {
  const result = sortByDate();
  expect(result).toEqual({ type: "SORT_BY_DATE", sortBy: "date" });
});

test("should return an action with a sort by amount set", () => {
  const result = sortByAmount();
  expect(result).toEqual({
    type: "SORT_BY_AMOUNT",
    sortBy: "amount"
  });
});

test("should return an action with a correct text prop", () => {
  const result = setTextFilters("rent");
  expect(result).toEqual({
    type: "SET_TEXTFILTER",
    text: "rent"
  });
});

test("should return an action with an empty string", () => {
  const result = setTextFilters();
  expect(result).toEqual({
    type: "SET_TEXTFILTER",
    text: ""
  });
});
