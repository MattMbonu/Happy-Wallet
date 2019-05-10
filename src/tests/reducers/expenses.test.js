import moment from "moment";
import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should return inital state", () => {
  const result = expensesReducer(undefined, { type: "@@INIT" });
  expect(result).toEqual([]);
});

test("should add an expense", () => {
  const result = expensesReducer(undefined, {
    type: "ADD_EXPENSE",
    expense: {
      id: "1",
      description: "for rent",
      note: "",
      amount: 54000,
      createdAt: 0
    }
  });
  expect(result).toEqual([
    {
      id: "1",
      description: "for rent",
      note: "",
      amount: 54000,
      createdAt: 0
    }
  ]);
});

test("should edit an expense", () => {
  const result = expensesReducer(expenses, {
    type: "EDIT_EXPENSE",
    id: "1",
    updates: {
      description: "hent"
    }
  });
  expect(result[0]).toEqual({
    id: "1",
    description: "hent",
    note: "",
    amount: 10000,
    createdAt: moment(0)
  });
});

test("should remove an expense", () => {
  const result = expensesReducer(expenses, {
    type: "REMOVE_EXPENSE",
    removeId: "4"
  });
  expect(result).toEqual([expenses[0], expenses[1], expenses[2]]);
});
