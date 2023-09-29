import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

const API = "http://localhost:3001/stocks"

function MainContainer() {


  const [stocks, setStocks] = useState([])
  const [sortBy, setSortBy] = useState("All")
  const [filterBy, setFilterBy] = useState("Tech")

  useEffect(() => {
    fetch(API)
    .then((res) => res.json())
    .then((data) => {
      setStocks(data)
      console.log(stocks)
    })
  }, [])


  function handleBuyStock(boughtStock) {
    setStocks(stocks.map(s => s === boughtStock ? {...s, owned: true} : s ))
    console.log(boughtStock)
    console.log(stocks)
  }
  
  function handleSellStock(soldStock) {
    setStocks(stocks.map(s => s === soldStock ? {...s, owned: false} : s))
    console.log(soldStock)
    console.log(stocks)
  }

  const sortedStocks = [...stocks].sort((stock1, stock2) => {
    if (sortBy === "Alphabetically") {
      return stock1.name.localeCompare(stock2.name)
    } else { 
      return stock1.price - stock2.price
    }
  })

  const filteredStocks = sortedStocks.filter((s) => s.type === filterBy)



  return (
    <div>
      <SearchBar 
      sortBy={sortBy}
      onChangeSort={setSortBy}
      filterBy={filterBy}
      onFilterChange={setFilterBy}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer 
          stocks={filteredStocks}
          onBuyStock={handleBuyStock}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
          stocks={stocks.filter((s) => s.owned)}
          onSellStock={handleSellStock}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;


