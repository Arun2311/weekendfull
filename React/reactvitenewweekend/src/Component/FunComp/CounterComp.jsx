import React, { useState } from "react";

function CounterComp() {
  const [count, setcount] = useState(1);

  const handleadd = () => {
    setcount(count + 1);
  };

  return (
    <div>
      <h1>Counter Fun</h1>

      <h2>count : {count}</h2>

      <button onClick={handleadd}>Add</button>
      <button
        onClick={() => {
          setcount(count - 1);
        }}
      >
        sub
      </button>
    </div>
  );
}

export default CounterComp;
