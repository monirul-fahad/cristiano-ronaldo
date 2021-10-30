import React, { useEffect, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { GiSandsOfTime } from "react-icons/gi";
import { BsPeople } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";
import { AiOutlineSchedule } from "react-icons/ai";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./EventDetails.css";

const EventDetails = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const { eventId } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://dry-badlands-77252.herokuapp.com/events/${eventId}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const onSubmit = (userInfo) => {
    const eventDetails = data;
    userInfo.order = eventDetails;

    fetch("https://dry-badlands-77252.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Event Confirmed Successfully");
          reset();
        }
      });
  };

  return (
    <div className="py-5 bg-info">
      <h1 className="pb-4 pt-2">Confirm Your Booking !!</h1>
      <Container>
        <div className="card mb-3 mx-auto" style={{ maxWidth: "720px" }}>
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src={data.img}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="card-body text-start px-5 px-md-3">
                <h4 className="card-title">{data.eventName}</h4>
                <h6 className="pb-1">
                  <GrLocation /> {data.location}
                </h6>
                <h6 className="">
                  <BsPeople /> {data.groupSize}
                </h6>

                <h6 className="">
                  <GiSandsOfTime /> {data.duration}
                </h6>
                <h6 className="pb-1">
                  <AiOutlineSchedule /> {data.schedule}
                </h6>
                <h5 className="fw-bold">
                  <FiDollarSign /> {data.cost}
                </h5>
              </div>
            </div>
          </div>
        </div>
        <p className="fw-bold text-start mx-auto" style={{ maxWidth: "700px" }}>
          {data.description}
        </p>
        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue={user.displayName} {...register("name")} />
          <input
            defaultValue={user.email}
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="error">This field is required</span>
          )}
          <input
            placeholder="Address"
            defaultValue=""
            {...register("address")}
          />

          <input placeholder="Phone" defaultValue="" {...register("phone")} />
          <input
            className="bg-danger fw-bold text-light"
            type="submit"
            value="Confirm Booking"
          />
        </form>
      </Container>
    </div>
  );
};

export default EventDetails;
