import React from "react";

import Spinner from "./Spinner";

import { LoadingStatus } from "../../types";

interface propTypes {
  status: LoadingStatus;
}

const TradeProofLoader = (props: propTypes) => {
  const { status } = props;

  const renderIndividualSpinner = (status: string, copy: string) => {
    let spinnerComponent;
    let textComponent = null;

    if (status === "idle") {
      spinnerComponent = <Spinner />;
      textComponent = (
        <p className="text-custom-gray w-full text-center">{copy}</p>
      );
    } else if (status === "loading") {
      spinnerComponent = <Spinner loading={true} />;
      textComponent = (
        <p className="text-custom-green w-full text-center">{copy}</p>
      );
    } else {
      spinnerComponent = <img src="/assets/order.svg" className="w-16 h-16" />;
      textComponent = (
        <p className="text-custom-green mt-3 text-center">{copy}</p>
      );
    }
    return (
      <>
        {spinnerComponent}
        {textComponent}
      </>
    );
  };

  const renderLoadingCrumbs = () => {
    let fetchTradeStatus = "idle";
    let generateProofStatus = "idle";
    let syncToChainStatus = "idle";

    switch (status) {
      case "fetch_orders":
        fetchTradeStatus = "loading";
        break;
      case "proof_generation":
        fetchTradeStatus = "done";
        generateProofStatus = "loading";
        break;
      case "proof_complete_idle":
        fetchTradeStatus = "done";
        generateProofStatus = "done";
        break;
      case "sync_chain":
        fetchTradeStatus = "done";
        generateProofStatus = "done";
        syncToChainStatus = "loading";
        break;
      case "show_complete":
      case "done":
        fetchTradeStatus = "done";
        generateProofStatus = "done";
        syncToChainStatus = "done";
        break;
      default:
        break;
    }

    return (
      <div className="flex items-center w-full uppercase text-custom-gray-light">
        <div className="flex flex-col items-center">
          {renderIndividualSpinner(fetchTradeStatus, "Fetch Trades")}
        </div>
        {fetchTradeStatus === "done" ? (
          <hr className="border-1 border-dashed border-custom-green w-40 mb-8" />
        ) : (
          <hr className="border-1 border-dashed border-custom-gray-light w-40 mb-8" />
        )}
        <div className="flex flex-col items-center">
          {renderIndividualSpinner(generateProofStatus, "Generate Proof")}
        </div>
        {syncToChainStatus === "loading" || syncToChainStatus === "done" ? (
          <hr className="border-1 border-dashed border-custom-green w-40 mb-8" />
        ) : (
          <hr className="border-1 border-dashed border-custom-gray-light w-40 mb-8" />
        )}
        <div className="flex flex-col items-center">
          {renderIndividualSpinner(syncToChainStatus, "Submit To Chain")}
        </div>
      </div>
    );
  };

  const renderMainSpinner = () => {
    let copy;

    switch (status) {
      case "fetch_orders":
        copy = "Fetching Trades";
        break;
      case "proof_generation":
        copy = "Generating Proof";
        break;
      case "sync_chain":
        copy = "Submitting To Chain";
        break;
      case "show_complete":
      case "done":
        copy = "Done";
        break;
      default:
        break;
    }

    if (status === "show_complete" || status === "proof_complete_idle") {
      return <img src={"/assets/order.svg"} className="w-44 h-44 mt-1" />;
    } else {
      return (
        <span>
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-transparent h-48 w-48 mt-4" />
          <span className="absolute z-50 text-custom-green font-light font-lg tracking-extrawidest w-28 -mt-30 ml-9 text-center">
            {copy}
          </span>
        </span>
      );
    }
  };

  return (
    <div className="flex flex-col mx-auto items-center h-auto uppercase bg-light-black bg-opacity-25 max-w-4xl px-20 py-24 rounded">
      <>{renderLoadingCrumbs()}</>
      <div className="my-12" />
      <>{renderMainSpinner()}</>
    </div>
  );
};

export default TradeProofLoader;
