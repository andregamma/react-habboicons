import * as React from "react";
import placethird from "../images/award_place_third.gif"

const AwardPlacethird = ({ ...props }) => {
  return (
    <img src={placethird} alt="Placethird" {...props} />
  );
}

export default AwardPlacethird;
