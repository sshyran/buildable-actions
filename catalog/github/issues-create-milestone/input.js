const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_USERNAME: $env.BUILDABLE_GITHUB_ACCOUNT_USERNAME, // Required
    owner: "string", // Required
    repo: "string", // Required
    title: "string", // Required

    // state: "open",
    // description: "string",
    // due_on: "2019-08-24T14:15:22Z",
  };
};
