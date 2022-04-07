import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import App from "./App";
import { PersonList } from "./Components";

describe("App", () => {
  it("render without crashing", () => {
    //don't render the whole children of the
    //app component,just get the App component.
    const appWrapper = shallow(<App />);
  });

  it("should render only PersonList component", () => {
    const appWrapper = shallow(<App />);
    const personList = appWrapper.find(PersonList);
    expect(personList).toHaveLength(1);
  });
  it("should have a state ", () => {
    const appWrapper = shallow(<App />);
    const state = appWrapper.state();
    expect(state).not.toBeNull();
  });
});
