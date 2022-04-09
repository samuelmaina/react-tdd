import { shallow } from "enzyme";
import { PeopleList } from "../../Components";
import ComponentWrapper from "./ComponentWrapper";

class PeopleListWrapper extends ComponentWrapper {
  constructor(wrapper) {
    super(wrapper);
  }
  getLiElemensWhenWhenGivenPropPerson(people) {
    const wrapper = shallow(<PeopleList people={people} />);
    return wrapper.find("li");
  }
}
export default PeopleListWrapper;
