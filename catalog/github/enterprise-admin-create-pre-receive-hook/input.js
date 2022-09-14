const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_USERNAME: $env.BUILDABLE_GITHUB_ACCOUNT_USERNAME, // Required
    name: "string", // Required
    script: "string", // Required
    script_repository: {}, // Required
    environment: {}, // Required

    // enforcement: "string",
    // allow_downstream_configuration: true,
  };
};
