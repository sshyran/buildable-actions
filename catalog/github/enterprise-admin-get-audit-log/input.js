const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_USERNAME: $env.BUILDABLE_GITHUB_ACCOUNT_USERNAME, // Required
    enterprise: "string", // Required

    // phrase: "string",
    // after: "string",
    // before: "string",
    // order: "desc",
    // page: 1,
    // per_page: 30,
  };
};
