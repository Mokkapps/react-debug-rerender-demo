import React, { useEffect, useState } from "react";
import Counter from "./Counter";

export default function Parent() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <Counter parentCount={count} />
      <button onClick={() => setCount(count + 1)}>
        Update counter via prop change
      </button>
    </React.Fragment>
  );
}
