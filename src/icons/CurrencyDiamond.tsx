import * as React from "react";
import currency_diamond from "../images/currency_diamond.png"

const CurrencyDiamond = ({ ...props }) => {
  return (
    <img src={currency_diamond} alt="Currency Diamond" {...props} />
  );
}

export default CurrencyDiamond;
