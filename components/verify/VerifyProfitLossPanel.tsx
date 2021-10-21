import React from "react";
import Image from "next/image";
import { calculateProfitLoss } from "../../utils";
import { Order, Transaction } from "../../types";
import TwitterLogo from "../../public/assets/twitter-green.svg";
import ZKLogo from "../../public/assets/zk-logo.svg";
import RedirectLogo from "../../public/assets/redirect.svg";

interface propTypes {
  orders: Order[];
  transaction: Transaction;
}

const VerifyProfitLossPanel = (props: propTypes) => {
  const baseURL = process.env.VERCEL_URL || `${window.location.hostname}`;
  const { orders, transaction } = props;

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

  const renderSendButton = () => {
    return (
      <a
        href={`https://twitter.com/intent/tweet?text=I proved my trading profits using Mina zero-knowledge Proofs: http://${baseURL}/share/${transaction.url}`}
        data-size="large"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="flex w-full justify-center items-center px-10 py-3 space-x-5 uppercase bg-white bg-opacity-10 hover:bg-opacity-20 text-custom-green border-2 border-custom-green rounded">
          <p className="tracking-extrawidest">Tweet It</p>
          <div>
            <Image src={TwitterLogo} alt="Twitter logo" />
          </div>
        </button>
      </a>
    );
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
      <Image
        src={ZKLogo}
        className="absolute -mt-32 w-32 h-32"
        alt="Zero Knowledge graphic"
      />
      <span className="flex flex-col items-center justify-center text-center">
        <p className="font-normal">{renderProfitLossText()}</p>
        <p className="text-6xl font-thin leading-12 text-custom-green">
          {renderProfitLoss(orders)}
        </p>
      </span>
      <div className="flex justify-between space-x-2 mt-14">
        {renderSendButton()}
      </div>
      <a
        href="https://minaexplorer.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center justify-center space-x-4 cursor-pointer mt-11">
          <Image src={RedirectLogo} alt="Redirect graphic" />
          <p className="text-base uppercase tracking-widest hover:text-gray-300 text-custom-light">
            View In Mina Explorer
          </p>
        </div>
      </a>
    </div>
  );
};

export default VerifyProfitLossPanel;
