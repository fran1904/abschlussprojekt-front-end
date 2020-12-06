import React from "react";

import CryptoTable from "./MOHAMMAD/CryptoTable";
import AverageDownCalc from "./AverageDownCalc";
import "./HomeStyle.css";
import NewsPage from "./NewsPage";
import MoneyTable from './MOHAMMAD/MoneyTable';

const Home = () => {
  return (
    <div className="home-container">
        <h2 className="home-headline">Dashboard</h2>
        <p className="byline">With all the tools to trade today's market</p>
      <main id="home-main">
        <div className="box1">
          <CryptoTable />
        </div>
        <div className="box2">
          <NewsPage />
        </div>
        <div className="box3">
          <AverageDownCalc />
        </div>
        <div className="box4">
        <MoneyTable />
        </div>
       

      </main>
    </div>
  );
};

export default Home;




