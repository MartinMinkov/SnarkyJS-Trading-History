import type { NextPage } from "next";
import { useRouter } from "next/router";

import React, { useState, useEffect } from "react";

import Layout from "../../components/common/Layout";
import Header from "../../components/common/Header";

import ProveInfoPanel from "../../components/prove/ProveInfoPanel";
import BuySellOrders from "../../components/common/BuySellOrders";
import TradeProofLoader from "../../components/common/TradeProofLoader";
import useSessionStorage from "../../hooks/useSessionStorage";

import { LoadingStatus, Order } from "../../types";
import OrderData from "../../orders.json";

const Prove: NextPage = () => {
  const [APISecret] = useSessionStorage("APISecret");
  const [APIToken] = useSessionStorage("APIToken");

  const [orders, setOrders] = useState<Order[]>([]);
  const [status, setStatus] = useState<LoadingStatus>("fetch_orders");
  const [txnId, setTxnId] = useState("");
  const [hideTrades, setHideTrades] = useState(false);
  const [hideTradeSize, setHideTradeSize] = useState(false);
  const router = useRouter();

  const startDate = new Date();
  const endDate = new Date();

  const callSnarkyExchange = async () => {
    return new Promise(async (resolve, _reject) => {
      const exchange = await import("../../lib/snarkyjs/exchange");
      const verified = exchange.test();
      console.log("Verified?", verified);
      resolve(verified);
    });
  };

  const addProof = async (txnId: string) => {
    const res = await fetch("/api/addProof", {
      method: "POST",
      body: JSON.stringify({
        txnId: txnId,
        proof: "MINA_PROOF",
      }),
    });
    return await res.json();
  };

  useEffect(() => {
    const fetchOrders = async () => {
      setOrders(OrderData.orders as Order[]);
      setStatus("proof_generation");
    };
    if (!APISecret || !APIToken) {
      router.push("/");
    } else {
      const timeout = setTimeout(() => {
        if (orders.length === 0) {
          fetchOrders();
        }
      }, 2000);
      return () => clearTimeout(timeout);
    }
  });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    switch (status) {
      case "proof_generation":
        // Wait to render
        timeout = setTimeout(async () => {
          //await callSnarkyExchange();
          setStatus("proof_complete_idle");
        }, 250);
        return () => clearTimeout(timeout);
      case "proof_complete_idle":
        timeout = setTimeout(() => {
          setStatus("sync_idle");
        }, 1500);
        return () => clearTimeout(timeout);
      case "sync_chain":
        timeout = setTimeout(() => {
          setStatus("show_complete");
        }, 4000);
        return () => clearTimeout(timeout);
      case "show_complete":
        timeout = setTimeout(() => {
          setStatus("done");
        }, 1500);
        return () => clearTimeout(timeout);
      case "done":
        const txnId =
          Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15);
        setTxnId(txnId);
        addProof(txnId);
      default:
        break;
    }
  }, [status]);

  const renderProofAndSellOrders = () => {
    switch (status) {
      case "fetch_orders":
      case "proof_generation":
      case "proof_complete_idle":
      case "sync_chain":
      case "show_complete":
        return <TradeProofLoader status={status} />;
      case "sync_idle":
        return (
          <div className="max-w-4xl mx-auto">
            <ProveInfoPanel
              orders={orders}
              onSyncToChainPress={() => setStatus("sync_chain")}
              startDate={startDate}
              endDate={endDate}
              hideTrades={hideTrades}
              setHideTrades={() => setHideTrades(!hideTrades)}
              hideTradeSize={hideTradeSize}
              setHideTradeSize={() => setHideTradeSize(!hideTradeSize)}
            />
            <div className="my-1" />
            {hideTrades ? (
              <BuySellOrders orders={orders} hideTradeSize={hideTradeSize} />
            ) : null}
          </div>
        );
      case "done":
        if (txnId) router.push(`verify/${txnId}`);
      default:
        return null;
    }
  };

  return (
    <Layout>
      <Header />
      <div className="my-12" />
      {renderProofAndSellOrders()}
    </Layout>
  );
};

export default Prove;
