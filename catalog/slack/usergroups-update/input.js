const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_SLACK_ACCESS_TOKEN: $env.BUILDABLE_SLACK_ACCESS_TOKEN, // Required
    usergroup: "string", // Required

    // channels: "string",
    // description: "string",
    // handle: "string",
    // include_count: true,
    // name: "string",
  };
};
