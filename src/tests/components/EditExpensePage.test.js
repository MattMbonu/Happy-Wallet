import React from "react";
import { EditExpensePage } from "../../components/EditExpensePage";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import { editExpense } from "../../actions/Expenses";

test("should render EditExpensePage", () => {
  const history = { push: jest.fn() };
  const editExpense = jest.fn();
  const removeExpense = jest.fn();
  const wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      expense={expenses[0]}
      history={history}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test("remove button removes expense with correct id", () => {
  const history = { push: jest.fn() };
  const editExpense = jest.fn();
  const removeExpense = jest.fn();
  const wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      expense={expenses[0]}
      history={history}
    />
  );
  wrapper.find("button").simulate("click");
  expect(removeExpense).toHaveBeenLastCalledWith(expenses[0].id);
  expect(history.push).toHaveBeenLastCalledWith("/");
});

test("onSubmit works correctly", () => {
  const history = { push: jest.fn() };
  const editExpense = jest.fn();
  const removeExpense = jest.fn();
  const wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      expense={expenses[0]}
      history={history}
    />
  );
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
});
