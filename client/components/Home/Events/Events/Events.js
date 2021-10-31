import React, { useEffect, useState } from "react";
import Event from "../Event/Event";
import "./Events.css";
const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("https://dry-badlands-77252.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <div className="py-5 events-container">
      <div className="py-5 container ">
        <div className="events-title">
          <h6>Choose Your Event...</h6>
          <h3>Book An Event For Your Travel</h3>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-5 py-4">
          {events.map((event) => (
            <Event key={event._id} event={event}></Event>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
