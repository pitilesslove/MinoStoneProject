import React, { Component, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectUnitAction } from '../actions';
import styles from "../css/Skill_Icon.module.css"

export default function Skill_Icon(props) {

  const dispatch = useDispatch();

  const selectSkill = () => {
    console.log("select Skill");
  }

  return (
    <div className={styles.body_circle}
    >

    </div>
  );

}