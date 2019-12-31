import React from "react";

import { Card } from "../card/Card.component.jsx";

import "./CardList.styles.css";

export const CardList = props => (
  <div className="card-list">
    {props.monsters.map((monster, index) => (
      <Card key={index} monster={monster}></Card>
    ))}
  </div>
);
