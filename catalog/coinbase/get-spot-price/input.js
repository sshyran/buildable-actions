const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    baseURL: "https://api.coinbase.com/v2", // Required
    currencyPair: "BTC-USD", // Required

    // date: "2020-10-23"
  };
};
