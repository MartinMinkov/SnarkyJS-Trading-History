import React, { useState } from "react";
import Dropdown from "../common/Dropdown";
import Button from "../common/Button";

const exchangeOptions = ["Binance", "Coinbase"];

interface propTypes {
  onExchangeSelectionPress: () => void;
}

const ExchangeSelection = (props: propTypes) => {
  const [currentExchange, setCurrentExchange] = useState(exchangeOptions[0]);
  const { onExchangeSelectionPress } = props;

  return (
    <div className="flex justify-center w-full space-x-20">
      <div className="flex flex-col justify-center">
        <p className="text-4xl w-86 text-center">
          Your Trade History Sets You Apart
        </p>
        <img src="/assets/discord.png" className="w-96 h-32 mt-4" />
        <p className="text-2xl font-normal w-108 mt-4">
          But anyone can fake a screenshot.
        </p>
        <p className="text-2xl font-normal w-108 mt-24">
          That's why we built <span className="font-bold">Proof-of-Trade.</span>
        </p>
        <div className="space-y-4 mt-16">
          <p className="text-2xl font-normal w-108">The app that:</p>
          <div className="flex space-x-4 text-2xl w-108">
            <img src="/assets/blue-check.svg" className="w-6 h-6" />
            <p>Verifies your trades, over any time peroid</p>
          </div>
          <div className="flex space-x-4 text-2xl w-108">
            <img src="/assets/blue-check.svg" className="w-6 h-6" />
            <p>Showcases your gains</p>
          </div>
          <div className="flex space-x-4 text-2xl w-108">
            <img src="/assets/blue-check.svg" className="w-6 h-6" />
            <p>Preserves your privacy</p>
          </div>
          <div className="flex space-x-4 text-2xl w-108">
            <img src="/assets/blue-check.svg" className="w-6 h-6" />
            <p>Keeps you in control of what you share</p>
          </div>
          <div className="flex space-x-4 text-2xl w-108">
            <img src="/assets/blue-check.svg" className="w-6 h-6" />
            <p>100% open source & on-chain</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-8 bg-light-black bg-opacity-25 max-w-4xl px-20 py-24 rounded h-full">
        <p className="text-4xl text-center w-80">
          Ready to Prove Your Profits?
        </p>
        <div className="w-80">
          <h3 className="font-light">Exchange</h3>
          <Dropdown
            items={exchangeOptions}
            current={currentExchange}
            setCurrent={setCurrentExchange}
          />
        </div>
        <div className="w-80" onClick={() => onExchangeSelectionPress()}>
          <Button copy={"Lets Do This"} />
        </div>
      </div>
    </div>
  );
};

export default ExchangeSelection;
