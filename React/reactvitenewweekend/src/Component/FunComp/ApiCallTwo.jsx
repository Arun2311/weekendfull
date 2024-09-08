import axios from "axios";
import React, { useEffect, useState } from "react";
import TestCode from "./TestCode";
export default function ApiCallTwo() {

  const [data, setdata] = useState([]);

  const [loader, setloader] = useState(false);


  useEffect(() => {
    handlefetch();
  }, []);

  const handlefetch = async () => {
    try {
      setloader(true)
      const resposne = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );

      setdata(resposne?.data);
      setloader(false)

    } catch (err) {
      setloader(false)

      console.log(err);
    }
  };



  return (
    <div>

{loader &&
      <TestCode/> }

      
      {data.map((das, i) => (
        <div key={i}>
          <h1>{das.title}</h1>
          <img src={das.image} />
          <h3>{das.price}</h3>
        </div>
      ))}

      <div>{/* <button onClick={handlepush}>Login</button> */}</div>
    </div>
  );
}
