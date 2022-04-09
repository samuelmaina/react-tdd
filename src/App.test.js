import { shallow } from "enzyme";
import App from "./App";
import { PeopleList } from "./Components";
import { ComponentWrapper } from "./tests/utils";

import {
  ensureEqual,
  ensureHasLength,
  ensureIsArray,
  ensureIsDefined,
  ensureNotNull,
} from "./tests/utils/matchers";

describe("App", () => {
  let appWrapper;

  beforeAll(() => {
    appWrapper = new ComponentWrapper(<App />);
  });

  it("should render only PeopleList component", () => {
    const peopleList = appWrapper.findComponent(PeopleList);
    ensureHasLength(peopleList, 1);
  });
  it("should have a state", () => {
    const state = appWrapper.getState();
    ensureNotNull(state);
  });

  it("the state should have people array", () => {
    const state = appWrapper.getState();
    const people = state.people;
    ensureIsDefined(people);
    ensureIsArray(people);
  });
  it("Ensure that the apps is passing state people to the PeopleList component", () => {
    const state = appWrapper.getState();
    const peopleList = appWrapper.findComponent(PeopleList);
    ensureEqual(peopleList.props().people, state.people);
  });
});
