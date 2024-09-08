import React, { useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";

export default function SelectDrop() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [selectchco, setselectchco] = useState("");

  const onsubmit = (data) => {
    console.log(data);
  };

  const handleChange = (e) => {
    setselectchco(e.value);
  };

  console.log(errors);

  return (
    <div>
      <label className="ms-5 mt-3">Chocolate Select : </label>
      <div className="w-50 ms-5 mt-3">
        <Select
          defaultValue={selectchco}
          onChange={handleChange}
          options={options}
        />
      </div>

      <label className="ms-5 mt-2 mb-3">Choco flvour</label>
      <br />
      <input
        className="ms-5 w-50"
        {...register("choco", {
          required: {
            value: selectchco != "chocolate",
            message: "reqyuired bcs  not chco",
          },
        })}
        placeholder="enter u r choco"
      />

      <p className="ms-5 text-danger">{errors?.choco?.message}</p>

      <br />
      <br />
      <br />

      <button
        className=" ms-5 btn btn-primary"
        onClick={handleSubmit(onsubmit)}
      >
        submit
      </button>
    </div>
  );
}
