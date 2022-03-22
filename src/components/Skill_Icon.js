import React, { Component, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  drawSkillInformationWindowAction,
  selectSkillAction
} from '../actions';
import styles from "../css/Skill_Icon.module.css"
import SkillInformationWindow from './Skill_InformationWindow';

export default function Skill_Icon(props) {

  const information = "This is Test Information";
  const dispatch = useDispatch();

  const drawSkillInformationWindow = (e) => {
    const skill = {
      id: 1,
      information: information,
      iconSrc: "",
      state: "HOVER"
    };
    dispatch(drawSkillInformationWindowAction(skill));
  }
  const removeSkillInformationWindow = (e) => {
    const skill = {
      id: 1,
      information: information,
      iconSrc: "",
      state: "IDLE"
    };
    dispatch(drawSkillInformationWindowAction(skill));
  }
  const selectSkill = (e) => {
    const skill = {
      id: 1,
      information: "Skill TEST",
      iconSrc: "",
      state: "SELECTED"
    };
    dispatch(selectSkillAction(skill));
  }

  return (

    < div className={styles.body_circle}
      onMouseEnter={drawSkillInformationWindow.bind(this)}
      onMouseLeave={removeSkillInformationWindow.bind(this)}
      onMouseDown={selectSkill.bind(this)}
    >
    </div >
  );

}