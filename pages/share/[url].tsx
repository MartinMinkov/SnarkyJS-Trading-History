import React from "react";

import Layout from "../../components/common/Layout";
import Header from "../../components/common/Header";
import NotFound from "../../components/common/NotFound";
import { addQueryParamToURL } from "../../utils";

const Share = () => {
  return (
    <Layout>
      <Header />
      <NotFound />
    </Layout>
  );
};

export const getServerSideProps = async (context: {
  params: { url: string };
}) => {
  const { url } = context.params;
  const pathname = process.env.VERCEL_URL
    ? `${process.env.VERCEL_URL}/api/getProof`
    : "http://localhost:3000/api/getProofByURL";

  const res = await fetch(addQueryParamToURL(pathname, "url", url));
  const { data } = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  } else {
    return {
      redirect: {
        destination: `/verify/${data.txnId}`,
      },
    };
  }
};

export default Share;
