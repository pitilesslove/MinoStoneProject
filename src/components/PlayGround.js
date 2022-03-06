import '../css/common.css';
import '../css/PlayGround.css';
import Unit from './Unit.js'
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function PlayGround() {

  // const [selected_unit, setSelectedUnit] = useState();
  const [enemy_units, setEnemyUnits] = useState([]);
  const [my_units, setMyUnits] = useState([]);

  const selected_unit = useSelector(state => state.unitReducer.payload);
  console.log("selected_unit : ", selected_unit);

  useEffect(() => {
    fetch("/data/units.json")
      .then(res => res.json())
      .then(res => {
        setEnemyUnits(res.enemy_units);
        setMyUnits(res.my_units);
      })
  }, []);

  // 선택에 대한 이벤트 콜백
  useEffect(() => {
    console.log("this is called!");
    var _myUnits = [];
    my_units.map(unit => {
      console.log(unit);
      if (unit.id === selected_unit.id && selected_unit.selected === true) {
        unit.selected = true;
      } else {
        unit.selected = false;
      }
      _myUnits.push(unit);
    });
    setMyUnits(_myUnits);
  }, [selected_unit]);


  const enemyUnits = enemy_units.map(unit => {
    console.log("unit");
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
      selected={unit.selected}
    />
  })

  const startGame = (e) => {
    console.log("start game is clicked!");
  }

  return (
    <div id="playground">
      <div id="enemy_ground" className="ground">
        <span>테스트 123</span>
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
