import { createStore, combineReducers } from "redux";
import uuid from "uuid";

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDate =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDate =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDate && endDate && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

// const demoState = {
//   expenses: [
//     {
//       id: "12ue98h9ddbw9",
//       description: "for rent",
//       note: "this is the final payment for that address",
//       amount: 54000,
//       createdAt: 0
//     }
//   ],
//   filters: {
//     text: "rent",
//     sortBy: "date",
//     startDate: undefined,
//     endDate: undefined
//   }
// };

//expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(expense => expense.id !== action.removeId);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else return expense;
      });
    default:
      return state;
  }
};

const filtersReducerDefaultValues = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultValues, action) => {
  switch (action.type) {
    case "SET_TEXTFILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: action.sortBy
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: action.sortBy
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.date
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.date
      };
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(VisibleExpenses);
});

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  removeId: id
});

const editExpense = (id, updates = {}) => ({
  type: "EDIT_EXPENSE",
  updates,
  id
});
const setTextFilters = (text = "") => ({
  type: "SET_TEXTFILTER",
  text
});

const sortByDate = () => ({ type: "SORT_BY_DATE", sortBy: "date" });
const sortByAmount = () => ({ type: "SORT_BY_AMOUNT", sortBy: "amount" });
const setStartDate = date => ({ type: "SET_START_DATE", date });
const setEndDate = date => ({ type: "SET_END_DATE", date });

const expense1 = store.dispatch(
  addExpense({
    description: "January Rent",
    note: "this will be my final payment",
    amount: 10,
    createdAt: 500
  })
);
const expense2 = store.dispatch(
  addExpense({
    description: "Feburary Rent",
    note: "this will be my oops",
    amount: 800000,
    createdAt: 1012
  })
);
const expense3 = store.dispatch(
  addExpense({
    description: "March Rent",
    note: "this will be my oops",
    amount: 700,
    createdAt: 600
  })
);
// // store.dispatch(removeExpense({ id: expense2.expense.id }));

// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(1000));
// // store.dispatch(editExpense(expense1.expense.id, { amount: 50000 }));

store.dispatch(setTextFilters("january"));
store.dispatch(setTextFilters("march"));
store.dispatch(setTextFilters("rent"));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(5000));
