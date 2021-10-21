import React from "react";
import { Order, Transaction } from "../../types";

import VerifyProfitLossPanel from "./VerifyProfitLossPanel";

interface propTypes {
  orders: Order[];
  transaction: Transaction;
}

const ProfitInfoPanel = (props: propTypes) => {
  const { orders, transaction } = props;

  const baseURL = process.env.VERCEL_URL || `${window.location.hostname}`;

  const renderShareButton = () => {
    return (
      <button
        className="flex  justify-between items-center px-6 py-2 space-y-1 bg-light-black hover:bg-opacity-75 rounded border border-white"
        onClick={() =>
          navigator.clipboard.writeText(`${baseURL}/share/${transaction.url}`)
        }
      >
        <div className="flex align-items justify-between space-x-4">
          <span>
            <p className="font-medium uppercase text-left">Share It</p>
            {transaction ? (
              <p className="font-light text-xs truncate">{`${baseURL}/share/${transaction.url}`}</p>
            ) : null}
          </span>
          <img src="/assets/copy.svg" />
        </div>
      </button>
    );
  };

  return (
    <div className="flex flex-col mx-auto sm:flex-row items-center justify-center h-96 uppercase bg-light-black bg-opacity-25 max-w-4xl px-16 py-16">
      <div className="flex flex-col items-start w-2/5 h-full">
        <div className="flex flex-col items-start h-full w-full space-y-8">
          <div className="flex flex-row w-full space-x-4">
            <img className="" src="/assets/binance-logo.svg" alt="logo" />
            <h2 className="text-lg leading-6">BTCUSDT</h2>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center cursor-pointer w-full h-full space-x-6 ml-2">
              <img src="/assets/date.svg" alt="logo" className="w-6" />
              <span className="font-light text-gray-300 hover:text-gray-200">
                2020-04-05 to 2021-08-21
              </span>
            </div>
          </div>
          {renderShareButton()}
        </div>
      </div>
      <div className="flex flex-col items-start w-3/5 h-full">
        <VerifyProfitLossPanel orders={orders} transaction={transaction} />
      </div>
    </div>
  );
};

export default ProfitInfoPanel;
