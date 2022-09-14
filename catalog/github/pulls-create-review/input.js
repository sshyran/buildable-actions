const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_USERNAME: $env.BUILDABLE_GITHUB_ACCOUNT_USERNAME, // Required
    owner: "string", // Required
    repo: "string", // Required
    pull_number: 0, // Required

    // commit_id: "string",
    // body: "string",
    // event: "APPROVE",
    // comments: [
    //     {
    //       path: "string",
    //       position: 0,
    //       body: "string",
    //       line: 28,
    //       side: "RIGHT",
    //       start_line: 26,
    //       start_side: "LEFT"
    //     }
    //   ],
  };
};
