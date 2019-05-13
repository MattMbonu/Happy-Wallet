import selectExpenses from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should return zero if no empty array is input", () => {
  const result = selectExpenses([]);
  expect(result).toBe(0);
});

test("should return a total amount when supplied arr of expenses", () => {
  const result = selectExpenses(expenses);
  expect(result).toBe(140000);
});

test("should return a total amount when supplied single expense", () => {
  const result = selectExpenses([expenses[0]]);
  expect(result).toBe(10000);
});
