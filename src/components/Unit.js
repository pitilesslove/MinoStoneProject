import '../css/Unit.css';
import React, { Component, useState } from "react";

export default function Unit(props) {

  var id = props.id;
  var attack = props.attack;
  var life = props.life;
  const [isActive, setActive] = useState(false);

  const selectUnit = (_id) => {
    console.log("select Unit", _id);
    setActive(!isActive);
  }

  return (
    <div
      className={isActive ? 'unit selected' : "unit"}
      onClick={function (_id, event) {
        selectUnit(_id)
      }.bind(this, id)}
    >
      <div className="body_circle">
        <div className="attack_circle_wrapper">
          <div className="attack_circle">
            <span className="value">{attack}</span>
          </div>
        </div>
        <div className="life_circle_wrapper">
          <div className="life_circle">
            <span className="value">{life}</span>
          </div>
        </div>
      </div>
    </div>
  );

}