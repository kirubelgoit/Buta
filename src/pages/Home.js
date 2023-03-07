import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import Header from "../components/header/Header"
import CTA from "../components/cta/CTA"

const home = () => {
  return (
  
    <div className="coolBackground">
      <Header/>
      <Services />

      <CTA/>
</div>

  );
};

export default home;
