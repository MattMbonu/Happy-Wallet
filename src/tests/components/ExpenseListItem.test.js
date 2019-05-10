import React from "react";
import { ExpenseListItem } from "../../components/ExpenseListItem";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";

test("renders a correct expense", () => {
  const wrapper = shallow(
    <ExpenseListItem
      key={expenses[0].id}
      description={expenses[0].description}
      amount={expenses[0].amount}
      createdAt={expenses[0].createdAt}
      id={expenses[0].id}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
