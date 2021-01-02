import * as React from "react";
import coin from "../images/currency_coin.png"

const CurrencyCoin = ({ ...props }) => {
  return (
    <img src={coin} alt="Coin" {...props} />
  );
}

export default CurrencyCoin;
