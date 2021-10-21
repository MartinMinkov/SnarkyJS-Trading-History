import { Order } from "../types";

export const calculateProfitLoss = (orders: Order[]) => {
  const profitLoss = orders
    .reduce((orders, order) => {
      const orderProfitLoss =
        ((parseFloat(order.sell.price) - parseFloat(order.buy.price)) /
          parseFloat(order.buy.price)) *
        100;
      return orders + orderProfitLoss;
    }, 0)
    .toFixed(1);
  return profitLoss;
};

export const addQueryParamToURL = (
  path: string,
  paramName: string,
  paramValue: string
) => {
  const result =
    `${path}?` +
    new URLSearchParams({
      [paramName]: paramValue,
    });
  return result;
};

// https://blog.abelotech.com/posts/number-currency-formatting-javascript/
export const currencyFormat = (num: string) => {
  return parseInt(num)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    .replace(/\.00$/, "");
};
