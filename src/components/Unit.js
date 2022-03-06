import '../css/Unit.css';
import React, { Component, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectUnitAction } from '../actions';

export default function Unit(props) {

  var id = props.id;
  var attack = props.attack;
  var life = props.life;
  var isSelected = props.selected;
  const [isActive, setActive] = useState(props.selected ? true : false);
  const dispatch = useDispatch();

  // const { value } = useSelector(state => state.value)
  // const { count } = useSelector(state => state.count)

  const selectUnit = () => {
    isSelected = !isSelected;
    console.log("select Unit", id, isSelected);
    var obj = Object.assign({}, props);
    obj.selected = isSelected;
    console.log(obj);
    dispatch(selectUnitAction(obj));
  }

  return (
    <div
      className={isSelected ? 'unit selected' : "unit"}
      onClick={function (_id, event) {
        selectUnit(_id)
      }.bind(this, id)}
    >
      <div className="body_circle">
        <div className="attack_circle_wrapper">
          <div className="attack_circle">
            <span className="value">{attack}</span>
          </div>
        </div>
        <div className="life_circle_wrapper">
          <div className="life_circle">
            <span className="value">{life}</span>
          </div>
        </div>
      </div>
    </div>
  );

}