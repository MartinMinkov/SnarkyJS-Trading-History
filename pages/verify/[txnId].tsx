import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Layout from "../../components/common/Layout";
import Header from "../../components/common/Header";
import VerifyInfoPanel from "../../components/verify/VerifyInfoPanel";

import OrderData from "../../orders.json";
import { addQueryParamToURL } from "../../utils";
import { Order, Transaction } from "../../types";

const Verify = () => {
  const router = useRouter();
  const { txnId } = router.query;

  const [orders, setOrders] = useState([] as Order[]);
  const [transaction, setTransaction] = useState<Transaction>(Object);
  const [error, setError] = useState(false);

  useEffect(() => {
    setOrders(OrderData.orders as Order[]);
  }, []);

  useEffect(() => {
    const fetchProof = async () => {
      const pathname = addQueryParamToURL(
        "/api/getProofByTxn",
        "txnId",
        txnId as string
      );
      const res = await fetch(pathname);
      const { data } = await res.json();
      if (!data) {
        setError(true);
      } else {
        setTransaction(data);
      }
    };
    let timeout: NodeJS.Timeout;
    if (txnId) timeout = setTimeout(() => fetchProof(), 250);
    return () => clearTimeout(timeout);
  }, [txnId]);

  const renderContentOr404 = () => {
    if (error) {
      router.push("/");
    } else {
      return transaction.url ? (
        <VerifyInfoPanel orders={orders} transaction={transaction} />
      ) : null;
    }
  };

  return (
    <Layout>
      <Head>
        <meta
          name="og:image"
          content="https://storage.googleapis.com/snarkyjs-demo-twitter-image/mina-authenticated.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@RECURSIVE_TRADES" />
        <meta name="twitter:title" content="Mina Authenticated Trade History" />
        <meta
          name="twitter:image"
          content="https://storage.googleapis.com/snarkyjs-demo-twitter-image/twitter-card-new.png"
        />
      </Head>
      <Header />
      <div className="my-12" />
      {renderContentOr404()}
    </Layout>
  );
};

export default Verify;
