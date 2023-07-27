import React from "react";
import "./References.css";
import hf from "../assets/hf.png";

const References = () => {
  return (
    <section id="#reference">
      <h2 className="references__heading">Suradnje i preporuke: </h2>
      <div className="references">
        <div className="references__card">
          <div className="references__avatar">
            <img src={hf} alt="avatar" />
            <h5>HF group</h5>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit sed suscipit iusto modi pariatur. Expedita porro
            veniam culpa laudantium nesciunt!
          </p>
        </div>
        <div className="references__card">
          <div className="references__avatar">
            <img src={hf} alt="avatar" />
            <h5>HF group</h5>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            minima possimus quisquam autem cumque dicta ab consequuntur ullam
            dolore aperiam.{" "}
          </p>
        </div>
        <div className="references__card">
          <div className="references__avatar">
            <img src={hf} alt="avatar" />
            <h5>HF group</h5>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit sed suscipit iusto modi pariatur. Expedita porro
            veniam culpa laudantium nesciunt!
          </p>
        </div>
      </div>
    </section>
  );
};

export default References;
