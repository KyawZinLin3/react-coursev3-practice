import { data } from "../../../data";
import React from "react";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const btnDeleteAll = () => {
    setPeople([]);
  };
  const btnDelete = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        console.log(person);
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" className="btn" onClick={() => btnDelete(id)}>
              Delete
            </button>
          </div>
        );
      })}
      <button
        type="button"
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={btnDeleteAll}
      >
        Delete All
      </button>
    </div>
  );
};

export default UseStateArray;
