const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_USERNAME: $env.BUILDABLE_GITHUB_ACCOUNT_USERNAME, // Required
    owner: "string", // Required
    repo: "string", // Required
    branch: "string", // Required

    // dismissal_restrictions: { users: ["string"], teams: ["string"] },
    // dismiss_stale_reviews: true,
    // require_code_owner_reviews: true,
    // required_approving_review_count: 0,
  };
};
