const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    id: "5e6be8e9e6aa436299950c41", // Required

    // pageSize: 10,
    // offset: 0,
    // count: true,
    // account: "5e6be8e9e6aa436299950c41",
    // counterAccount: "5e6be8e9e6aa436299950c41",
    // currency: "BTC",
    // from: 1571833231000,
    // to: 1571833231000,
    // amount: [{ op: "gte", value: "1.5" }],
    // currencies: ["BTC"],
    // transactionType: "FAILED",
    // transactionTypes: ["CREDIT_PAYMENT"],
    // opType: "PAYMENT",
    // transactionCode: "1_01_EXTERNAL_CODE",
    // paymentId: "65426",
    // recipientNote: "65426",
    // senderNote: "65426",
  };
};
