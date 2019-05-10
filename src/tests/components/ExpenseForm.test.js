import React from "react";
import ExpenseForm from "../../components/ExpenseForm";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";

test("should render form", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("should render an expense form with populated values", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render an error on bad form submit", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("form").simulate("submit", { preventDefault: () => {} });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should change description on input", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(0)
    .simulate("change", { target: { value: "bananaTest" } });
  expect(wrapper.state("description")).toBe("bananaTest");
  expect(wrapper).toMatchSnapshot();
});

test("should change note on textarea", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("textarea")
    .simulate("change", { target: { value: "bananaTest" } });
  expect(wrapper.state("note")).toBe("bananaTest");
  expect(wrapper).toMatchSnapshot();
});

test("should change amount on input", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", { target: { value: "22.34" } });
  expect(wrapper.state("amount")).toBe("22.34");
  expect(wrapper).toMatchSnapshot();
});

test("should not change amount on input", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", { target: { value: "22.3413w23" } });
  expect(wrapper.state("amount")).toBe("");
  expect(wrapper).toMatchSnapshot();
});

test("should call on submit prop", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find("form").simulate("submit", { preventDefault: () => {} });
  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    note: expenses[0].note,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt.valueOf()
  });
});
