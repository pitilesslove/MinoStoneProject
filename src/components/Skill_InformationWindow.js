import React, { Component, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import styles from "../css/Skill_InformationWindow.module.css"

export default function Skill_InformationWindow(props) {

    const text = props.text;

    return (
        <div className={styles.Title}>
            {text}
        </div>
    );

}