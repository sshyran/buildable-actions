const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    key: "cNR1n1EuzzaWHD7xcmAo71mwxyVV3uJUbLoamQFiXzaJhjTfCF2P", // Required
  };
};
