import * as React from "react";
import offline from "../images/hotel_offline.png"

const HotelOffline = ({ ...props }) => {
  return (
    <img src={offline} alt="Offline" {...props} />
  );
}

export default HotelOffline;
