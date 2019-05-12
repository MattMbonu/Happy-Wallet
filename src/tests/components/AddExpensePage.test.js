import React from "react";
import { AddExpensePage } from "../../components/AddExpensePage";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";

test("should render page", () => {
  const addExpenseSpy = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(
    <AddExpensePage addExpense={addExpenseSpy} history={history} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit", () => {
  const addExpenseSpy = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(
    <AddExpensePage addExpense={addExpenseSpy} history={history} />
  );
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0]);
  expect(addExpenseSpy).toHaveBeenLastCalledWith(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith("/");
});
