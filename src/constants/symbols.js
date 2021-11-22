import _ from "lodash";

const symbols = {
  EUR: "EUR",
  USD: "USD",
  ARS: "ARS",
  BRL: "BRL",
};

export default symbols;

export const symbolCodes = _.values(symbols);
