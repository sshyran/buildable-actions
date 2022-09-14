const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    chain: "ETH", // Required
    token: "1", // Required
    contractAddress: "0x94Ce79B9F001E25BBEbE7C01998A78F7B27D1326", // Required

    // testnetType: "ethereum-ropsten",
  };
};
