import * as React from "react";
import navigator from "../images/room_navigator.png"

const RoomNavigator = ({ ...props }) => {
  return (
    <img src={navigator} alt="Navigator" {...props} />
  );
}

export default RoomNavigator;
