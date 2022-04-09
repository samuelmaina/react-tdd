import React from "react";

export default ({ people }) => (
  <ul>
    {people && people.length > 0
      ? people.map((person, index) => <li key={index}> {person} </li>)
      : undefined}
  </ul>
);
