const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_CIRCLECI_PERSONAL_API_KEY: $env.BUILDABLE_CIRCLECI_PERSONAL_API_KEY, // Required
    projectSlug: "string", // Required

    // pageToken: "string",
    // allBranches: true,
    // branch: "string",
    // reportingWindow: "last-7-days",
  };
};