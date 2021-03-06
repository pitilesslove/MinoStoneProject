import React, { Component, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectUnitAction } from '../actions';
import styles from "../css/SkillWindow.module.css"
import Skill_Icon from "./Skill_Icon";

export default function SkillWindow(props) {

  const dispatch = useDispatch();

  const selectSkill = () => {
    console.log("select Skill");
  }

  return (
    <div className={styles.Title}
    >
      <Skill_Icon />
      <Skill_Icon />
      <Skill_Icon />
      <Skill_Icon />
    </div>
  );

}