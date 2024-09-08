import React, { useState, useEffect } from "react";

export default function ApiCall() {
  const [count, setcount] = useState(1);
  const [extracount, setextracount] = useState(2);

  const handleadd = () => {
    setcount(count + 1);
  };


  

  useEffect(() => {
    console.log("Arun");

    return () => {
      console.log("logut");
    };
  }, [extracount, count]);



  const handleextraadd = () => {
    setextracount(extracount + 1);
  };



  

  return (
    <div>
      <h1>Life Cycleusing hook its useeffect </h1>

      <h2>count : {count}</h2>

      <h2>extracount : {extracount}</h2>

      <button onClick={handleadd}>Add</button>

      <button onClick={handleextraadd}>extra Add</button>
    </div>
  );
}
