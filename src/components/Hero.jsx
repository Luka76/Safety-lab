import React from "react";
import {Card} from "./index";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero__container">
      <div className="hero__card">
        <Card /> 
      </div>
    </div>
  );
};

export default Hero;
