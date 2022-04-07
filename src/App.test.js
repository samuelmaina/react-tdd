import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import App from "./App";
import { PersonList } from "./Components";

describe("App", () => {
  let appWrapper;
  beforeAll(() => {
    appWrapper = shallow(<App />);
  });

  it("should render only PersonList component", () => {
    const personList = appWrapper.find(PersonList);
    expect(personList).toHaveLength(1);
  });
  it("should have a state ", () => {
    const state = appWrapper.state();
    expect(state).not.toBeNull();
  });

  it("the state should have people array ", () => {
    const state = appWrapper.state();
    const people = state.people;
    expect(people).toBeDefined();
    expect(Array.isArray(people)).toBeTruthy();
  });
});
