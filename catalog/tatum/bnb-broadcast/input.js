const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    txData: "62BD544D1B9031EFC330A3E855CC3A0D51CA5131455C1AB3BCAC6D243F65460D", // Required
  };
};
