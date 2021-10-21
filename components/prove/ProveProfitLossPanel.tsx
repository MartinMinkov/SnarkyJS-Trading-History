import React from "react";

import { calculateProfitLoss } from "../../utils";
import { Order } from "../../types";
import Toggle from "../common/Toggle";

interface propTypes {
  orders: Order[];
  onSyncToChainPress: () => void;
  hideTrades: boolean;
  hideTradeSize: boolean;
  setHideTrades: () => void;
  setHideTradeSize: () => void;
}

const ProveProfitLossPanel = (props: propTypes) => {
  const {
    orders,
    onSyncToChainPress,
    hideTrades,
    setHideTrades,
    hideTradeSize,
    setHideTradeSize,
  } = props;

  const renderProfitLoss = (orders: Order[]) => {
    const profitLoss = calculateProfitLoss(orders);
    return parseFloat(profitLoss) < 0 ? (
      <>{profitLoss}%</>
    ) : (
      <>+{profitLoss}%</>
    );
  };

  const renderProfitLossText = () => {
    if (orders.length === 0) return "Fetching Trades...";
    else {
      return "Cumulative Profit & Loss";
    }
  };

  const renderSyncButton = () => {
    return (
      <button
        className="flex w-60 justify-center items-center px-3 py-3 space-x-2 mt-4 uppercase bg-white bg-opacity-10 hover:bg-opacity-20 text-custom-green border-2 border-custom-green rounded"
        onClick={() => {
          if (orders.length > 0) {
            onSyncToChainPress();
          }
        }}
      >
        <p className="tracking-extrawidest">Submit To Chain</p>
      </button>
    );
  };

  return (
    <div className="flex flex-col items-end justify-center w-full">
      <span className="flex flex-col items-end justify-between text-center">
        <p className="font-normal">{renderProfitLossText()}</p>
        <p className="text-6xl font-thin leading-12 text-custom-green">
          {renderProfitLoss(orders)}
        </p>
      </span>
      <div className="flex items-center justify-end w-full mt-16">
        <p className="capitalize w-full tracking-wider font-light text-right">
          Hide Individual Trades
        </p>
        <Toggle onClick={setHideTrades} toggled={hideTrades} />
      </div>
      <div className="flex items-center justify-end w-full mt-4">
        <p className="capitalize w-full tracking-wider font-light text-right">
          Hide Trade Size
        </p>
        <Toggle onClick={setHideTradeSize} toggled={hideTradeSize} />
      </div>
      <div className="flex justify-between space-x-2 mt-10">
        {renderSyncButton()}
      </div>
    </div>
  );
};

export default ProveProfitLossPanel;
