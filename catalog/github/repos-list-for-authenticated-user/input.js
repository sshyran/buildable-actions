const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_GITHUB_ACCESS_TOKEN: $env.BUILDABLE_GITHUB_ACCESS_TOKEN, // Required
    BUILDABLE_GITHUB_ACCOUNT_USERNAME: $env.BUILDABLE_GITHUB_ACCOUNT_USERNAME, // Required

    // visibility: "all",
    // affiliation: "owner,collaborator,organization_member",
    // type: "all",
    // sort: "created",
    // direction: "asc",
    // per_page: 30,
    // page: 1,
    // since: "2019-08-24T14:15:22Z",
    // before: "2019-08-24T14:15:22Z",
  };
};
