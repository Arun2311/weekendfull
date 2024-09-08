import React, { useState } from "react";
import { useForm } from "react-hook-form"

export default function FormWithReact() {


  



  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [email, setemail] = useState("");

  const [isshow, setisshow] = useState(false);

  const handleaddname = (e) => {
    setname(e.target.value);
    console.log(e.target.value);
  };

  const handleaddage = (e) => {
    setage(e.target.value);

    console.log(e.target.value);
  };

  const handleaddemail = (e) => {
    setemail(e.target.value);

    console.log(e.target.value);
  };

  const handleadd = () => {
    setisshow(true);
  };

  return (
    <div>
      {!isshow ? (
        <div>
          <label>First Name : </label>

          <input onChange={handleaddname} placeholder="enter u r name" />

          <br></br>
          <br></br>
          <br></br>

          <label>Age : </label>

          <input onChange={handleaddage} placeholder="enter u r Age" />

          <br></br>
          <br></br>
          <br></br>

          <label>Email : </label>

          <input onChange={handleaddemail} placeholder="enter u r Email" />

          <br></br>
          <br></br>

          <button onClick={handleadd}>Submit</button>
        </div>
      ) : (
        ""
      )}

      {isshow ? (
        <div>
          <h1>First Name : {name} </h1>
          <h1>Age : {age} </h1>
          <h1>Email : {email}</h1>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
