const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    fabricEndpoint: "string", // Required
    BUILDABLE_TATUM_API_KEY: $env.BUILDABLE_TATUM_API_KEY, // Required
    BUILDABLE_TATUM_API_URL: $env.BUILDABLE_TATUM_API_URL, // Required
    key: "key_1", // Required
  };
};
