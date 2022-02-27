import '../css/common.css';
import '../css/PlayGround.css';
import Unit from './Unit.js'
import React, { Component, useState, useEffect } from "react";

export default function PlayGround() {

  const [enemy_units, setEnemyUnits] = useState([]);
  const [my_units, setMyUnits] = useState([]);

  useEffect(() => {
    fetch("/data/units.json")
      .then(res => res.json())
      .then(res => {
        setEnemyUnits(res.enemy_units);
        setMyUnits(res.my_units);
      })
  }, []);

  const enemyUnits = enemy_units.map(unit => {
    return <Unit
      key={unit.id}
      id={unit.id}
      attack={unit.attack}
      life={unit.life}
    />
  })

  const myUnits = my_units.map(unit => {
    return <Unit
      key={unit.id}
      id={unit.id}
      attack={unit.attack}
      life={unit.life}
    />
  })

  const startGame = (e) => {
    console.log("start game is clicked!");
  }

  return (
    <div id="playground">
      <div id="enemy_ground" className="ground">
        <span>적의 공간 (Enemy's ground)</span>
        <div id="enemy_batch" className="batch_ground">
          {enemyUnits}
        </div>
      </div>
      <div id="turn_area">
        <div
          className="turn_button"
          onClick={startGame.bind(this)}
        >
          Start
        </div>
      </div>
      <span id="front_line"></span>
      <div id="my_ground" className="ground">
        <span>나의 공간 (My ground)</span>
        <div id="my_batch" className="batch_ground">
          {myUnits}
        </div>
      </div>
    </div>
  );
}
