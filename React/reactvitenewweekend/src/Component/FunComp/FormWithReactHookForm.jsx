import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { json, useLocation, useParams } from "react-router-dom";

export default function FormWithReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let { arrun } = useParams();

  const location = useLocation();

  const useQuery = () => new URLSearchParams(useLocation().search);

  location.state.data
  let query = useQuery();

  useEffect(() => {
    let datas = query.get("data");

    console.log(typeof datas, "DSdsa");
  }, []);

  const on = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <div>
      <div>
        <label>First Name : </label>

        <input
          {...register("name", {
            required: "name is required",

            minLength: {
              value: 8,
              message: "the arun min",
            },

            pattern: "A",
          })}
          placeholder="enter u r name"
        />

        <br></br>

        <p style={{ color: "red" }}>{errors?.name?.message}</p>
        <br></br>
        <br></br>

        <label>Age : </label>

        <input
          {...register("age", { required: "Pls enter u r age" })}
          placeholder="enter u r Age"
        />

        <br></br>
        <br></br>
        <br></br>

        <label>Email : </label>

        <input
          {...register("email", { required: "Pls enter u r email" })}
          placeholder="enter u r Email"
        />

        <br></br>
        <br></br>

        <button onClick={handleSubmit(on)}>Submit</button>
      </div>
    </div>
  );
}
