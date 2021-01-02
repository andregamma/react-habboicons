import * as React from "react";
import capacityquite from "../images/room_capacity_quite.gif"

const RoomCapacityquite = ({ ...props }) => {
  return (
    <img src={capacityquite} alt="Capacityquite" {...props} />
  );
}

export default RoomCapacityquite;
