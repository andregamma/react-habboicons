import * as React from "react";
import capacityfull from "../images/room_capacity_full.gif"

const RoomCapacityfull = ({ ...props }) => {
  return (
    <img src={capacityfull} alt="Capacityfull" {...props} />
  );
}

export default RoomCapacityfull;
