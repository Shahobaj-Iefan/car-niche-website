import React from "react";

import { useForm } from "react-hook-form";
import Stack from "react-bootstrap/Stack";

import axios from "axios";

const AddServices = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    console.log(data);
    axios
      .post("https://fierce-cliffs-29526.herokuapp.com/services", data)
      .then(res => {
        if (res.data.insertedId) {
          alert("Service added Successfully");
          reset();
        }
      });
  };
  return (
    <div>
      <h3>Add Your Services</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={2} className='col-md-5 mx-auto'>
          <input
            {...register("name", { required: true, maxLength: 20 })}
            placeholder='Service Name'
          />
          <textarea
            {...register("description")}
            placeholder='Service Details'
          />
          <input
            type='number'
            {...register("price")}
            placeholder='Service Price'
          />
          <input {...register("img")} placeholder='Put image link' />
          <input type='submit' />
        </Stack>
      </form>
    </div>
  );
};

export default AddServices;
