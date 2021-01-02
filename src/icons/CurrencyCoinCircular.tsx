import * as React from "react";
import coincircular from "../images/currency_coin_circular.png"

const CurrencyCoincircular = ({ ...props }) => {
  return (
    <img src={coincircular} alt="Coincircular" {...props} />
  );
}

export default CurrencyCoincircular;
