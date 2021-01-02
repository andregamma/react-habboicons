import * as React from "react";
import placefirst from "../images/award_place_first.gif"

const AwardPlacefirst = ({ ...props }) => {
  return (
    <img src={placefirst} alt="Placefirst" {...props} />
  );
}

export default AwardPlacefirst;
