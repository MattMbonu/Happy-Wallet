import React from "react";
import { shallow } from "enzyme";
import { Login } from "../../components/Login";

test("should render login page", () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toMatchSnapshot();
});
