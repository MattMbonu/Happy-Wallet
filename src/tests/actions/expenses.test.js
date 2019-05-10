import { addExpense, editExpense, removeExpense } from "../../actions/Expenses";

//for objects use toEqual instead of toBe
test("should remove expense", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    removeId: "123abc"
  });
});

test("should create an action to edit expense", () => {
  const action = editExpense("123", { note: "hi" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    updates: { note: "hi" },
    id: "123"
  });
});

test("should create add expense action", () => {
  const expenseValues = {
    description: "for rent",
    note: "this is the final payment for that address",
    amount: 54000,
    createdAt: 0
  };
  const result = addExpense(expenseValues);
  expect(result).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseValues,
      id: expect.any(String)
    }
  });
});

test("should create a deafult expense action", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});
