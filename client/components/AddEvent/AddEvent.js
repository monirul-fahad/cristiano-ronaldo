import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddEvent.css";

const AddEvent = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/events", data).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
    });
  };

  return (
    <div className="add-package">
      <h2>Add a Event</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("eventName", { required: true })}
          placeholder="Event Name"
        />
        <input
          {...register("location", { required: true })}
          placeholder="Location.  ex: City, Country"
        />

        <textarea {...register("description")} placeholder="Description" />
        <input
          {...register("duration", { required: true })}
          placeholder="Staying?  ex: 3 Days/4 Nights"
        />
        <input
          {...register("schedule", { required: true })}
          placeholder="Date?  ex: 22 June, 2022"
        />
        <input type="number" {...register("cost")} placeholder="Amount" />
        <input {...register("img")} placeholder="Image URL" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddEvent;
