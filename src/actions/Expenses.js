import uuid from "uuid";
import database from "../firebase/firebase";

export const addExpense = ({
  id,
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id,
    description,
    note,
    amount,
    createdAt
  }
});

export const setExpenses = () => {
  const expenses = [];
  return dispatch => {
    return database
      .ref("expenses")
      .once("value")
      .then(snapshot => {
        snapshot.forEach(snapshotChild => {
          expenses.push({
            id: snapshotChild.key,
            ...snapshotChild.val()
          });
        });
        dispatch(setExpenseStore(expenses));
      });
  };
};

export const setExpenseStore = (expenses = []) => ({
  type: "SET_EXPENSE",
  expenses
});

export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    database
      .ref("expenses")
      .push(expense)
      .then(ref =>
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        )
      );
  };
};
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  removeId: id
});

export const startRemoveExpense = ({ id } = {}) => {
  return dispatch => {
    database
      .ref(`expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      });
  };
};

export const editExpense = (id, updates = {}) => ({
  type: "EDIT_EXPENSE",
  updates,
  id
});
