import * as React from "react";
import online from "../images/hotel_online.png"

const HotelOnline = ({ ...props }) => {
  return (
    <img src={online} alt="Online" {...props} />
  );
}

export default HotelOnline;
