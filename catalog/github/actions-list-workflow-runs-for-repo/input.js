const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_USERNAME: $env.BUILDABLE_GITHUB_ACCOUNT_USERNAME, // Required
    owner: "string", // Required
    repo: "string", // Required

    // actor: "string",
    // branch: "string",
    // event: "string",
    // status: "completed",
    // per_page: 30,
    // page: 1,
    // created: "2019-08-24T14:15:22Z",
    // exclude_pull_requests: false,
  };
};
