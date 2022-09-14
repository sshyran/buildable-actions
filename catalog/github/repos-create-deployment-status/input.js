const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_USERNAME: $env.BUILDABLE_GITHUB_ACCOUNT_USERNAME, // Required
    owner: "string", // Required
    repo: "string", // Required
    deployment_id: 0, // Required
    state: "error", // Required

    // target_url: "",
    // log_url: "",
    // description: "",
    // environment: "production",
    // environment_url: "",
    // auto_inactive: true,
  };
};
