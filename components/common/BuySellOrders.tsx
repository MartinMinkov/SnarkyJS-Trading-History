import React from "react";
import Image from "next/image";
import moment from "moment";
import { Order } from "../../types";
import OrderLogo from "../../public/assets/order.svg";

// https://blog.abelotech.com/posts/number-currency-formatting-javascript/
const currencyFormat = (num: string) => {
  return parseInt(num)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    .replace(/\.00$/, "");
};

interface propTypes {
  orders: Order[];
  hideTradeSize: boolean;
}

const BuySellOrders = (props: propTypes) => {
  const { orders, hideTradeSize } = props;
  const renderBuySellOrder = (order: Order) => {
    const { buy, sell } = order;
    return (
      <div
        key={order.id}
        className="motion-safe:animate-fadeIn text-white flex flex-col sm:flex-row justify-around sm:justify-center items-center h-auto py-6 sm:py-0 md:h-36 w-full m:w-8/12 bg-light-black bg-opacity-25 hover:bg-opacity-50 cursor-pointer font-light space-x-12"
      >
        <div>
          <Image src={OrderLogo} alt="logo" />
        </div>
        <div className="flex flex-col justify-center w-1/2 space-y-4">
          <div className="flex item-center justify-between uppercase">
            <p>
              {moment
                .unix(parseFloat(buy.timestamp))
                .format("YYYY-MM-DD h:mm:ss ")}{" "}
              UTC
            </p>
            <span className="flex justify-around items-center space-x-2">
              <p>Buy </p>
              <p>@ {currencyFormat(buy.price)}</p>
            </span>
            {hideTradeSize ? null : <p>{buy.quantity}</p>}
          </div>
          <hr className="border border-custom-gray" />
          <div className="flex items-center justify-between uppercase">
            <p>
              {moment
                .unix(parseFloat(sell.timestamp))
                .format("YYYY-MM-DD h:mm:ss ")}{" "}
              UTC
            </p>
            <span className="flex justify-around items-center space-x-2">
              <p>Sell</p>
              <p>@ {currencyFormat(sell.price)}</p>
            </span>
            {hideTradeSize ? null : <p>{sell.quantity}</p>}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center space-y-1">
      {orders.map(renderBuySellOrder)}
    </div>
  );
};
export default BuySellOrders;
