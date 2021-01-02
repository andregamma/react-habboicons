import * as React from "react";
import ducketshadow from "../images/currency_ducket_shadow.png"

const CurrencyDucketshadow = ({ ...props }) => {
  return (
    <img src={ducketshadow} alt="Ducketshadow" {...props} />
  );
}

export default CurrencyDucketshadow;
