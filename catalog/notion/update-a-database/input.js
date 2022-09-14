const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    notionVersion: "2022-02-22", // Required
    BUILDABLE_NOTION_API_TOKEN: $env.BUILDABLE_NOTION_API_TOKEN, // Required
    id: "string", // Required

    // title: [{ text: { content: "Ever Better Reading List Title" } }],
    // properties: { "Wine Pairing": { rich_text: {} } },
  };
};
