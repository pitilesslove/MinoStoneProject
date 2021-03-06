import styles from '../css/PlayGround.module.css';
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../App'
import Unit from './Unit'
import SkillWindow from './SkillWindow';
import Skill_InformationWindow from './Skill_InformationWindow';
import SkillTargetingArrow from './SkillTargetingArrow';

export default function PlayGround() {

  // 같이 업데이트 되어야 하는 것들은 하나의 state로 묶는다. (= state는 같이 그려주는 묶음)
  const [units, setUnits] = useState({
    myUnits: [],
    enemyUnits: [],
  })

  const {
    myUnits, enemyUnits
  } = units;

  const [loading, setLoading] = useState(true);
  const [isSkillSelected, setSkillSelected] = useState(false);

  const selected_unit = useSelector(state => state.unitReducer.payload);
  const hovered_skill = useSelector(state => state.skillReducer.payload);
  const selected_skill = useSelector(state => state.skillReducer.payload);

  useEffect(() => {
    const getDocument = async () => {
      try {
        const myUnitsQuery = query(collection(db, "MY_UNITS"));
        const enemyUnitsQuery = query(collection(db, "ENEMY_UNITS"));
        var _myUnits = [];
        var _enemyUnits = [];

        let querySnapshot = await getDocs(myUnitsQuery);
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data().name);
          _myUnits.push(doc.data());
        });
        querySnapshot = await getDocs(enemyUnitsQuery);
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data().name);
          _enemyUnits.push(doc.data());
        });
        setUnits({
          ...units,
          myUnits: _myUnits,
          enemyUnits: _enemyUnits
        });
      } catch (e) {
        console.log("[error]");
      } finally {
        setLoading(false);
      }
    };
    getDocument();

  }, []);

  // 선택에 대한 이벤트 콜백
  useEffect(() => {
    var _myUnits = [];
    myUnits.map(unit => {
      console.log(unit);
      if (unit.id === selected_unit.id && selected_unit.selected === true) {
        unit.selected = true;
      } else {
        unit.selected = false;
      }
      _myUnits.push(unit);
    });
    setUnits({
      ...units,
      [myUnits]: _myUnits
    });
  }, [selected_unit]);

  // 스킬 아이콘에 대한 이벤트 콜백
  useEffect(() => {
    // 아직 없음.

  }, [hovered_skill]);

  // 스킬 선택되면 올라오는 이벤트. 타게팅 화살표를 그려줘야 한다.
  useEffect(() => {
    if (selected_skill.state === "SELECTED") {
      setSkillSelected(true);
    }
  }, [selected_skill]);



  const drawEnemyUnits = enemyUnits.map(unit => {
    console.log("unit");
    return <Unit
      key={unit.id}
      id={unit.id}
      attack={unit.attack}
      life={unit.life}
    />
  })

  const drawMyUnits = myUnits.map(unit => {
    return <Unit
      key={unit.id}
      id={unit.id}
      attack={unit.attack}
      life={unit.life}
      selected={unit.selected}
    />
  })

  const skillWindow = (selected_unit.selected === false || selected_unit.id === -1) ? "" : <SkillWindow />;
  const skillInformationWindow = (hovered_skill.state === "HOVER" || hovered_skill.state === "SELECTED") ? <Skill_InformationWindow text={hovered_skill.information} /> : "";
  const skillTargetingArrow = isSkillSelected === false ? "" : <SkillTargetingArrow />;

  const startGame = (e) => {
    console.log("start game is clicked!");
  }

  return (
    <div id={styles.playground}>
      <div id={styles.enemy_ground} className={styles.ground}>
        <span>적의 공간 (Enemy's ground)</span>
        <div id={styles.enemy_batch} className={styles.batch_ground}>
          {drawEnemyUnits}
        </div>
      </div>
      <div id={styles.turn_area}>
        <div
          className={styles.turn_button}
          onClick={startGame.bind(this)}
        >
          {loading ? "Loading" : "Start"}
        </div>
      </div>
      <span id={styles.front_line}></span>
      {skillInformationWindow}
      {skillTargetingArrow}
      {skillWindow}
      <div id={styles.my_ground} className={styles.ground}>
        <span>나의 공간 (My ground)</span>
        <div id={styles.my_batch} className={styles.batch_ground}>
          {drawMyUnits}
        </div>
      </div>
    </div>
  );
}
