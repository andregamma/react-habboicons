import * as React from "react";
import placesecond from "../images/award_place_second.gif"

const AwardPlacesecond = ({ ...props }) => {
  return (
    <img src={placesecond} alt="Placesecond" {...props} />
  );
}

export default AwardPlacesecond;
