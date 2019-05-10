export const setTextFilters = (text = "") => ({
  type: "SET_TEXTFILTER",
  text
});

export const sortByDate = () => ({ type: "SORT_BY_DATE", sortBy: "date" });
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
  sortBy: "amount"
});
export const setStartDate = date => ({ type: "SET_START_DATE", date });
export const setEndDate = date => ({ type: "SET_END_DATE", date });
