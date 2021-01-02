import * as React from "react";
import capacityempty from "../images/room_capacity_empty.gif"

const RoomCapacityempty = ({ ...props }) => {
  return (
    <img src={capacityempty} alt="Capacityempty" {...props} />
  );
}

export default RoomCapacityempty;
