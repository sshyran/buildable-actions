const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    chain: "ETH", // Required
    contractAddress: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85", // Required
    nftAddress: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85", // Required
    seller: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85", // Required
    id: "string", // Required
    tokenId: "100000", // Required
    endedAt: 100000, // Required
    isErc721: true, // Required
    fromPrivateKey: "0x05e150c73f1920ec14caa1e0b6aa09940899678051a78542840c2668ce5080c2", // Required

    // erc20Address: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85",
    // amount: "1",
    // nonce: 1,
    // fee: { gasLimit: "40000", gasPrice: "20" },
  };
};
