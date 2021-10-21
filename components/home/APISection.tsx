import React from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import useSessionStorage from "../../hooks/useSessionStorage";

interface propTypes {
  onAPISelectionPress: () => void;
}
const APISelection = (props: propTypes) => {
  const { onAPISelectionPress } = props;
  const [APISecret, setAPISecret] = useSessionStorage("APISecret");
  const [APIToken, setAPIToken] = useSessionStorage("APIToken");
  return (
    <div className="flex flex-col items-center justify-center space-y-8 w-full">
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
      <div className="w-108">
        <h3 className="font-light">API KEY</h3>
        <Input value={APIToken || ""} onChange={setAPIToken} />
      </div>
      <div className="w-108">
        <h3 className="font-light">API SECRET</h3>
        <Input value={APISecret || ""} onChange={setAPISecret} />
      </div>
      <p className="text-xl w-108">Check only ‘Enable Reading’ permisssions:</p>
      <img src="/assets/api-permissions.jpg" />
      <div className="w-80" onClick={() => onAPISelectionPress()}>
        <Button copy={"Continue"} />
      </div>
    </div>
  );
};

export default APISelection;
