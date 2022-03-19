import React, { Component, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { drawSkillInformationWindowAction } from '../actions';
import styles from "../css/Skill_Icon.module.css"
import SkillInformationWindow from './Skill_InformationWindow';

export default function Skill_Icon(props) {

  const information = "This is Test Information";
  const dispatch = useDispatch();

  const drawSkillInformationWindow = (e) => {
    const skill = {
      id: 1,
      information: information,
      iconSrc: ""
    };
    console.log(skill);
    dispatch(drawSkillInformationWindowAction(skill));
  }
  const removeSkillInformationWindow = (e) => {
    dispatch(drawSkillInformationWindowAction(null));
  }

  return (

    < div className={styles.body_circle}
      onMouseEnter={drawSkillInformationWindow.bind(this)}
      onMouseLeave={removeSkillInformationWindow.bind(this)}
    >
    </div >
  );

}