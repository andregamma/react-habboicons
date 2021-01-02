import * as React from "react";
import ducket from "../images/currency_ducket.png"

const CurrencyDucket = ({ ...props }) => {
  return (
    <img src={ducket} alt="Ducket" {...props} />
  );
}

export default CurrencyDucket;
