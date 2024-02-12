import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((currentState) => {
      console.log(currentState);
      return currentState + 1;

      //
    });
  };
  return (
    <div>
      <h1>{count}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
