const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_USERNAME: $env.BUILDABLE_GITHUB_ACCOUNT_USERNAME, // Required
    hook_id: 0, // Required

    // config: { url: "string", content_type: "string", secret: "string", insecure_ssl: "string" },
    // events: ["string"],
    // active: true,
  };
};
