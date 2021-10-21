import React from "react";
import Button from "../common/Button";

interface propTypes {
  onConfirmTradingPress: () => void;
}
const AgreementSection = (props: propTypes) => {
  const { onConfirmTradingPress } = props;

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <p className="text-3xl w-108">
        Your trade data stays private with zero-knowledge proofs
      </p>
      <p className="text-xl w-108">
        We are an open-source project, sponsored by the Mina Foundation.
      </p>
      <p className="text-xl w-108">
        {" To fetch your trade history, your Binance "}
        <a
          href="https://www.binance.com/en/support/faq/360002502072"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer underline"
        >
          API key
        </a>
        {
          " is needed.  This HTTPS request occurs in your browser. Our server never sees or stores your API key."
        }
      </p>
      <p className="text-xl w-108">
        We require the lowest level of permissions access: “enable reading”.
      </p>
      <p className="text-xl w-108">
        (Please make sure nothing else is checked.)
      </p>
      <div className="w-80" onClick={() => onConfirmTradingPress()}>
        <Button copy={"I Understand"} />
      </div>
    </div>
  );
};

export default AgreementSection;
