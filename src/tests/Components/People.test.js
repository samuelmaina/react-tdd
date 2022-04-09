import { shallow } from "enzyme";
import { PeopleList } from "../../Components";

describe("PeopleList", () => {
  let appWrapper;
  beforeAll(() => {
    appWrapper = shallow(<PeopleList />);
  });

  it("renders a ul element", () => {
    const personUls = findComponent("ul");
    expect(personUls).toHaveLength(1);
  });

  it("rendered 0 li if the people prop is empty", () => {
    const person = [];
    const personIls = getLiElemensWhenWhenGivenPropPerson(person);
    expect(personIls).toHaveLength(0);
  });

  it.only("rendered having only 1 li if the people prop has only one person", () => {
    const person = [{ firstName: "Alan", lastName: "Turing" }];
    const personIls = getLiElemensWhenWhenGivenPropPerson(person);
    expect(personIls).toHaveLength(1);
    console.log(personIls);
    expect(personIls[0].value).toBe(person[0]);
  });

  function getState() {
    return appWrapper.state();
  }

  function findComponent(Component) {
    return appWrapper.find(Component);
  }

  function getLiElemensWhenWhenGivenPropPerson(people) {
    const appWrapper = shallow(<PeopleList people={people} />);
    return appWrapper.find("li");
  }
});
