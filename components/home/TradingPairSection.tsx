import React, { useState, useEffect } from "react";
import Link from "next/link";
import DatePicker from "react-datepicker";

import Dropdown from "../common/Dropdown";
import Button from "../common/Button";

const tradingPairOptions = ["BTCUSDT", "BTCBNB"];

const TradingPairSection = () => {
  const [endDate, setEndDate] = useState(new Date());
  const [startDate, setStartDate] = useState(
    new Date(new Date().setFullYear(new Date().getFullYear() - 1))
  );

  const [currentTradingPair, setCurrentTradingPair] = useState(
    tradingPairOptions[0]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-8 mx-auto max-w-4xl bg-light-black bg-opacity-25 px-20 py-24 rounded">
      <p className="text-3xl w-full flex justify-center">
        Please Select a Token Pair:
      </p>
      <div className="w-80">
        <h3 className="font-light">Token Pair</h3>
        <Dropdown
          items={tradingPairOptions}
          current={currentTradingPair}
          setCurrent={setCurrentTradingPair}
        />
      </div>
      <div className="w-80">
        <h3 className="font-light">Date Range</h3>
        <div className="flex space-x-4">
          <DatePicker
            className="text-black w-full bg-gray-200 bg-opacity-50 shadow-md pl-5 pr-10 py-2 text-left"
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            placeholderText="YYYY-MM-DD"
            dateFormat="yyyy-MM-dd"
          />
          <DatePicker
            className="text-black w-full bg-gray-200 bg-opacity-50 shadow-md pl-5 pr-10 py-2 text-left"
            selected={endDate}
            onChange={(date: Date) => setEndDate(date)}
            placeholderText="YYYY-MM-DD"
            dateFormat="yyyy-MM-dd"
          />
        </div>
      </div>
      <div className="w-80">
        <Link href={"/prove"} passHref>
          <div>
            <Button copy={"Calculate"} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TradingPairSection;
