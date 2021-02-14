import React, { useState } from "react";

const Counter = ({ parentCount }) => {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <div>Internal counter: {count}</div>
      <div>Prop counter: {parentCount}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </React.Fragment>
  );
};

Counter.whyDidYouRender = true;
export default Counter;
