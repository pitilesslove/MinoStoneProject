import React, { Component, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectUnitAction } from '../actions';
import styles from "../css/SkillWindow.module.css"

export default function SkillWindow(props) {

  const dispatch = useDispatch();

  const selectSkill = () => {
    console.log("select Skill");
  }

  return (
    <div className={styles.Title}
    >
      SkillWindow
    </div>
  );

}