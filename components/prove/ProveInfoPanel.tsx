import React from "react";
import Image from "next/image";
import { Order } from "../../types";
import moment from "moment";

import ProveProfitLossPanel from "./ProveProfitLossPanel";

interface propTypes {
  orders: Order[];
  onSyncToChainPress: () => void;
  startDate: Date;
  endDate: Date;
  hideTrades: boolean;
  hideTradeSize: boolean;
  setHideTrades: () => void;
  setHideTradeSize: () => void;
}

const ProfitInfoPanel = (props: propTypes) => {
  const {
    orders,
    onSyncToChainPress,
    startDate,
    endDate,
    hideTrades,
    setHideTrades,
    hideTradeSize,
    setHideTradeSize,
  } = props;

  const renderDates = () => {
    if (!startDate || !endDate) {
      return null;
    } else
      return `${moment(startDate).format("YYYY-MM-DD")} - ${moment(
        endDate
      ).format("YYYY-MM-DD")}`;
  };

  const renderExchangeAndTwitterSection = () => {
    return (
      <div className="flex flex-col items-start h-full w-full space-y-4">
        <div className="flex flex-row w-full space-x-4">
          <Image
            className=""
            src="assets/binance-logo.svg"
            alt="Binance logo"
          />
          <h2 className="text-lg leading-6">BTCUSDT</h2>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center cursor-pointer w-full h-full space-x-6 ml-2">
            <Image src="/assets/date.svg" className="w-6" alt="Date graphic" />
            <span className="font-light text-gray-300 hover:text-gray-200">
              {renderDates()}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col mx-auto sm:flex-row items-center justify-center h-108 uppercase bg-light-black bg-opacity-25 px-20 py-16">
      <div className="w-2/5 h-full">{renderExchangeAndTwitterSection()}</div>
      <div className="w-3/5 h-full">
        <ProveProfitLossPanel
          orders={orders}
          onSyncToChainPress={onSyncToChainPress}
          hideTrades={hideTrades}
          setHideTrades={setHideTrades}
          hideTradeSize={hideTradeSize}
          setHideTradeSize={setHideTradeSize}
        />
      </div>
    </div>
  );
};
export default ProfitInfoPanel;
