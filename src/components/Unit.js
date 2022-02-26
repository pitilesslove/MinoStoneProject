import '../css/Unit.css';
import React, { Component } from "react";

class Unit extends Component {

  selectUnit(_id) {
    console.log("select Unit", _id);
  }

  render() {
    var id = this.props.id;
    var attack = this.props.attack;
    var life = this.props.life;
    return (
      <div
        className="unit"
        onClick={function (_id, event) {
          this.selectUnit(_id)
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
}

export default Unit;
