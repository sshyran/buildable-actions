const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_USERNAME: $env.BUILDABLE_GITHUB_ACCOUNT_USERNAME, // Required
    owner: "string", // Required
    repo: "string", // Required

    // state: "open",
    // secret_type: "string",
    // resolution: "string",
    // page: 1,
    // per_page: 30,
  };
};
