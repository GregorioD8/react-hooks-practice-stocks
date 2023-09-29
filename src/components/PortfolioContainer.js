import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, onSellStock }) {




  const portfolio = stocks.map((s) => (
    <Stock
    key={s.id}
    stock={s}
    onSellStock={onSellStock}
    />

  ))

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio}
    </div>
  );
}

export default PortfolioContainer;
