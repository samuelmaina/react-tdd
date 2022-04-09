class AppWrapper {
  constructor(appWrapper) {
    this.appWrapper = appWrapper;
  }
  getState() {
    return this.appWrapper.state();
  }
  findComponent(Component) {
    return this.appWrapper.find(Component);
  }
}
