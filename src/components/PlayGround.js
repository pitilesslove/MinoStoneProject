import styles from '../css/PlayGround.module.css';
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Unit from './Unit'
import SkillWindow from './SkillWindow';

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

  const skillWindow = (selected_unit.selected === false || selected_unit.id === -1) ? "" : <SkillWindow />;

  const startGame = (e) => {
    console.log("start game is clicked!");
  }

  return (
    <div id={styles.playground}>
      <div id={styles.enemy_ground} className={styles.ground}>
        <span>테스트 123</span>
        <div id={styles.enemy_batch} className={styles.batch_ground}>
          {enemyUnits}
        </div>
      </div>
      <div id={styles.turn_area}>
        <div
          className={styles.turn_button}
          onClick={startGame.bind(this)}
        >
          Start
        </div>
      </div>
      <span id={styles.front_line}></span>
      {skillWindow}
      <div id={styles.my_ground} className={styles.ground}>
        <span>나의 공간 (My ground)</span>
        <div id={styles.my_batch} className={styles.batch_ground}>
          {myUnits}
        </div>
      </div>
    </div>
  );
}
