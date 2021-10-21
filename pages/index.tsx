import type { NextPage } from "next";
import ExchangeSelection from "../components/home/ExchangeSelection";
import AgreementSection from "../components/home/AgreementSection";
import APISection from "../components/home/APISection";
import TradingPairSection from "../components/home/TradingPairSection";

import Layout from "../components/common/Layout";
import Header from "../components/common/Header";

import { useState, useEffect } from "react";

type ConfirmationStatus =
  | "confirm_exchange"
  | "confirm_understand"
  | "confirm_api"
  | "confirm_trading_pair";

const Home: NextPage = () => {
  const [confirmationStatus, setConfirmationStatus] =
    useState<ConfirmationStatus>("confirm_exchange");
  const onExchangeSelectionPress = () =>
    setConfirmationStatus("confirm_understand");
  const onConfirmTradingPress = () => setConfirmationStatus("confirm_api");
  const onAPISelectionPress = () =>
    setConfirmationStatus("confirm_trading_pair");

  const renderSection = () => {
    switch (confirmationStatus) {
      case "confirm_exchange":
        return (
          <ExchangeSelection
            onExchangeSelectionPress={onExchangeSelectionPress}
          />
        );
      case "confirm_understand":
        return (
          <AgreementSection onConfirmTradingPress={onConfirmTradingPress} />
        );
      case "confirm_api":
        return <APISection onAPISelectionPress={onAPISelectionPress} />;
      case "confirm_trading_pair":
        return <TradingPairSection />;
      default:
        null;
    }
  };

  return (
    <Layout>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col w-full items-center justify-between mt-16 h-80 space-y-6">
          <div className="w-full">{renderSection()}</div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
