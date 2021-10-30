import React from "react";
import { GoCalendar } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
const Event = (props) => {
  const { _id, eventName, schedule, img, cost, duration, location } =
    props.event;
  return (
    <div className="col">
      <div className="card border-0 h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body text-start">
          <div className="d-flex  justify-content-between">
            <h4>${cost}/per person</h4>
            <h5>
              <GoCalendar /> {duration}
            </h5>
          </div>
          <h3 className="pt-3 fw-bold">{eventName}</h3>
          <h4 className="pb-3 text-danger">
            <GrLocation />
            {location}
          </h4>
          <h5 className="card-text">Event on- {schedule}</h5>
        </div>
        <div className="card-footer border-0 bg-white">
          <Link to={`/eventDetails/${_id}`}>
            <button className="btn btn-success">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Event;

/*
   <div className="card h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{eventName}</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      */
