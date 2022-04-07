import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  it("render without crashing", () => {
    //don't render the whole children of the
    //app component,just get the App component.
    const appWrapper = shallow(<App />);
  });
});
