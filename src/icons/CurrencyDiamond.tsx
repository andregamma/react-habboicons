import * as React from "react";
import diamond from "../images/currency_diamond.png"

const CurrencyDiamond = ({ ...props }) => {
  return (
    <img src={diamond} alt="Diamond" {...props} />
  );
}

export default CurrencyDiamond;
