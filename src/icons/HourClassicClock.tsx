import * as React from "react";
import classicclock from "../images/hour_classic_clock.gif"

const HourClassicclock = ({ ...props }) => {
  return (
    <img src={classicclock} alt="Classicclock" {...props} />
  );
}

export default HourClassicclock;
