import { shallow } from "enzyme";

class ComponentWrapper {
  constructor(Component) {
    this.wrapper = shallow(Component);
  }
  getState() {
    return this.wrapper.state();
  }
  findComponent(Component) {
    return this.wrapper.find(Component);
  }
}

export default ComponentWrapper;
