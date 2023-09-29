import React from "react";
import Stock from "./Stock";

function StockContainer( { stocks, onBuyStock }) {

  const viewableStocks = stocks.map((s) => (
    <Stock
    key={s.id}
    stock={s}
    onBuyStock={onBuyStock}
    />

  
  ))

  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
      {viewableStocks}
    </div>
  );
}

export default StockContainer;
