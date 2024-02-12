import data from "../src/data";
import { useState } from "react";

const App = () => {
  const [people, setPeople] = useState(data);
  var total = people.length;
  //console.log(people);

  const handelDeleteAll = () => {
    setPeople([]);
  };
  return (
    <>
      <div className="container">
        <h3>{total} Birthdays Today</h3>
        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <>
              <div className="person" key={id}>
                <img src={image} alt={name} />
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </>
          );
        })}
        <button type="button" onClick={handelDeleteAll} className="btn">
          Delete All
        </button>
      </div>
    </>
  );
};
export default App;
