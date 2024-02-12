import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    hobby: "Reading a book",
  });

  // const [name, setName] = useState("Peter");
  // const [age, setAge] = useState(18);
  // const [hobby, setHobby] = useState("Reading a book");

  const showJohn = () => {
    setPerson({ name: "John", age: 18, hobby: "Playing futsal" });
  };

  const { name, age, hobby } = person;
  return (
    <>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h4>Enjoy : {hobby}</h4>
      <button type="button" className="btn" onClick={showJohn}>
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
