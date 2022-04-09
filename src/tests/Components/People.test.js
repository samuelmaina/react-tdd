import { PeopleList } from "../../Components";
import { PeopleListWrapper } from "../utils";
import {
  ensureHasLength,
  ensureContains,
  ensureEqual,
} from "../utils/matchers";

describe("PeopleList", () => {
  let component;
  beforeAll(() => {
    component = new PeopleListWrapper(<PeopleList />);
  });

  it("renders a ul element", () => {
    const peopleUls = component.findComponent("ul");
    ensureHasLength(peopleUls, 1);
  });

  it("rendered 0 li if the people prop is empty", () => {
    const people = [];
    const peopleIls = component.getLiElemensWhenWhenGivenPropPeople(people);
    ensureHasLength(peopleIls, 0);
  });

  it("rendered having only 1 li if the people prop has only one person", () => {
    const people = [{ firstName: "Alan", lastName: "Turing" }];
    const peopleIls = component.getLiElemensWhenWhenGivenPropPeople(people);
    ensureHasLength(peopleIls, 1);
    ensureContains(peopleIls.text(), people[0].firstName);
    ensureContains(peopleIls.text(), people[0].lastName);
  });

  it("rendered having only 2 li if the people prop has only two people", () => {
    const people = [
      { firstName: "Alan", lastName: "Turing" },
      { firstName: "Edger", lastName: "Dijkstra" },
    ];
    const peopleIls = component.getLiElemensWhenWhenGivenPropPeople(people);
    const texts = peopleIls.map((li) => li.text());
    ensureEqual(texts, ["Alan Turing", "Edger Dijkstra"]);
  });
});
