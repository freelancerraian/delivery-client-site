import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./addservice.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://obscure-shelf-23886.herokuapp.com/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Add Successfull");
          reset();
        }
      });
  };

  return (
    <div className="container  p-5">
      <div className="m-5 addservice p-3">
        <h1 className="service-text">Add a New Service</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="add">
          <input
            className="mt-3"
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Name"
          />
          <input
            className="mt-3"
            {...register("restrurent", { required: true })}
            placeholder="Restrurent Name"
          />
          <input
            className="mt-3"
            {...register("from", { required: true })}
            placeholder="From"
          />
          <input
            className="mt-3"
            {...register("to", { required: true })}
            placeholder="To"
          />
          <textarea
            className="mt-3"
            {...register("description")}
            placeholder="Description"
          />
          <input
            className="mt-3"
            type="number"
            {...register("price")}
            placeholder="Delivary Charge"
          />
          <input className="mt-3" {...register("time")} placeholder="time" />
          <input
            className="mt-3"
            {...register("img")}
            placeholder="Image URL"
          />
          <button type="submit" className="addbtn">
            <nav className="btn-nav">
              <ul className="btn-ul">
                <li className="btn-li">
                  Submit
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </li>
              </ul>
            </nav>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
