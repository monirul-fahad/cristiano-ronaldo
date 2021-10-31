import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Events from "../Events/Events/Events";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Events></Events>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
