import React from "react";
import { shallow } from "enzyme";
import Search from "./Search";

describe("<Search/>", () => {
  it("Function is called with onChange event values", () => {
    const mock = jest.fn();
    const event = { target: { value: "sometext" } };
    const wrapper = shallow(<Search onChange={mock} />)
      .childAt(1)
      .dive();
    console.log(wrapper.debug());
    wrapper.find("input").simulate("change", event);
    expect(mock).toHaveBeenCalledWith(event);
  });
});
