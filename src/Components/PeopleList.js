import React from "react";

export default (props) => {
  const people = props.people;

  return <ul>{people && people.length == 1 ? <li></li> : undefined}</ul>;
};
