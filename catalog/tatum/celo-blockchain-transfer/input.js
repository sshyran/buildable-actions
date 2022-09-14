const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    to: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85", // Required
    currency: "CELO", // Required
    feeCurrency: "CELO", // Required
    amount: "100000", // Required
    fromPrivateKey: "0x05e150c73f1920ec14caa1e0b6aa09940899678051a78542840c2668ce5080c2", // Required

    // data: "My note to recipient.",
    // nonce: 0,
  };
};
