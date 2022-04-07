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

  it("rendered 0 li if the person prop is empty", () => {
    const person = [];
    const personIls = getLiElemensWhenWhenGivenPropPerson(person);
    expect(personIls).toHaveLength(0);
  });

  it("rendered 1 li if the person prop has only one person", () => {
    const person = [{ firstName: "Alan", lastName: "Turing" }];
    const personIls = getLiElemensWhenWhenGivenPropPerson(person);
    expect(personIls).toHaveLength(1);
  });

  function getState() {
    return appWrapper.state();
  }

  function findComponent(Component) {
    return appWrapper.find(Component);
  }

  function getLiElemensWhenWhenGivenPropPerson(person) {
    const appWrapper = shallow(<PersonList person={person} />);
    return appWrapper.find("li");
  }
});
