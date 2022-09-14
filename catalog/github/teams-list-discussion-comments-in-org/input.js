const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_USERNAME: $env.BUILDABLE_GITHUB_ACCOUNT_USERNAME, // Required
    org: "string", // Required
    team_slug: "string", // Required
    discussion_number: 0, // Required

    // direction: "asc",
    // per_page: 30,
    // page: 1,
  };
};
