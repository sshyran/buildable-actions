const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_TWITTER_BEARER_TOKEN: $env.BUILDABLE_TWITTER_BEARER_TOKEN, // Required
    name: "string", // Required

    // description: "string",
    // private: false,
  };
};
