import '../css/common.css';
import '../css/PlayGround.css';
import Unit from './Unit.js'
import React, { Component } from "react";
import ReactDOM from 'react-dom';

class PlayGround extends Component {



  constructor(props) {
    super(props);

    this.state = {
      units: [
      ]
    };
  }

  createMyUnits() {
    var units = [
      { id: 1, attack: 5, life: 6 },
      { id: 2, attack: 3, life: 13 },
      { id: 3, attack: 2, life: 7 },
      { id: 4, attack: 4, life: 3 },
      { id: 5, attack: 2, life: 4 },
    ];
    return units;
  }

  createEnemyUnits() {
    var units = [
      { id: 5, attack: 5, life: 6 },
      { id: 4, attack: 3, life: 13 },
      { id: 3, attack: 2, life: 7 },
      { id: 2, attack: 4, life: 3 },
      { id: 1, attack: 2, life: 4 },
    ];
    return units;
  }


  spawnUnits(units) {
    console.log("spawnUnits");
    var _unitsJsx = [];
    for (let i = 0; i < units.length; i++) {
      _unitsJsx.push(
        <Unit
          key={units[i].id}
          id={units[i].id}
          attack={units[i].attack}
          life={units[i].life}
        />
      )
    }
    return _unitsJsx;
  }

  startGame(e) {
    console.log("start game is clicked!");
    var myUnits = this.createMyUnits();
    var enemyUnits = this.createEnemyUnits();
    var myUnitsJsx = this.spawnUnits(myUnits);
    var enemyUnitsJsx = this.spawnUnits(enemyUnits);
    var my_batch = document.getElementById("my_batch")
    var enemy_batch = document.getElementById("enemy_batch")
    ReactDOM.render(myUnitsJsx, my_batch);
    ReactDOM.render(enemyUnitsJsx, enemy_batch);
  }


  render() {


    return (
      <div id="playground">
        <div id="enemy_ground" className="ground">
          <span>적의 공간 (Enemy's ground)</span>
          <div id="enemy_batch" className="batch_ground">

          </div>
        </div>
        <div id="turn_area">
          <div
            className="turn_button"
            onClick={this.startGame.bind(this)}
          >
            Start
          </div>
        </div>
        <span id="front_line"></span>
        <div id="my_ground" className="ground">
          <span>나의 공간 (My ground)</span>
          <div id="my_batch" className="batch_ground">

          </div>
        </div>
      </div>
    );
  }
}

export default PlayGround;
