import React from "react";

function Stock({ stock, onBuyStock, onSellStock }) {

 
  function handleBuySell(e) {
    e.preventDefault()
    if (stock.owned === true) {
      return onSellStock(stock)
    } else {
      return onBuyStock(stock)
    }

  }
  return (
    <div>
      <div className="card" onClick={handleBuySell}>
        <div className="card-body" >
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
