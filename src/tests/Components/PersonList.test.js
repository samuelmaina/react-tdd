import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import { PersonList } from "../../Components";

describe("PersonList", () => {
  let appWrapper;
  beforeAll(() => {
    appWrapper = shallow(<PersonList />);
  });

  it("renders a ul element", () => {
    const personUls = findComponent("ul");
    expect(personUls).toHaveLength(1);
  });

  function getState() {
    return appWrapper.state();
  }

  function findComponent(Component) {
    return appWrapper.find(Component);
  }
});
