const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    notionVersion: "2022-02-22", // Required
    BUILDABLE_NOTION_API_TOKEN: $env.BUILDABLE_NOTION_API_TOKEN, // Required
    id: "string", // Required

    // properties: { Status: { select: { name: "Reading" } } },
  };
};
