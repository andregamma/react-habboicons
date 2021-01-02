import * as React from "react";
import buildingisometricsmall from "../images/hotel_building_isometric_small.gif"

const HotelBuildingisometricsmall = ({ ...props }) => {
  return (
    <img src={buildingisometricsmall} alt="Buildingisometricsmall" {...props} />
  );
}

export default HotelBuildingisometricsmall;
