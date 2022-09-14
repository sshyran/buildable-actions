const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_USERNAME: $env.BUILDABLE_GITHUB_ACCOUNT_USERNAME, // Required
    owner: "string", // Required
    repo: "string", // Required
    path: "string", // Required
    message: "string", // Required
    sha: "string", // Required

    // branch: "string",
    // committer: { name: "string", email: "string" },
    // author: { name: "string", email: "string" },
  };
};
