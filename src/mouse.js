import React, { useState } from "react";
import "./mouse.css";
const Mouse = () => {
  const [spot, setSpot] = useState({
    x: 0,
    y: 0,
  });
  const mouseHandle = (e) => {
    setSpot({
      x: e.screenX,
      y: e.screenY,
    });
  };
  return (
    <div
      onMouseMove={mouseHandle}
      className={spot.x < window.innerWidth / 2 ? "blue" : "tomato"}
    >
      <h1>
        X: {spot.x} and Y: {spot.y}
      </h1>
    </div>
  );
};

export default Mouse;
