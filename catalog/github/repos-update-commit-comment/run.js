const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_GITHUB_ACCESS_TOKEN,
    BUILDABLE_GITHUB_ACCOUNT_USERNAME,
    owner,
    repo,
    comment_id,
    body,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "patch",
      url: `https://api.github.com/repos/${owner}/${repo}/comments/${comment_id}`,
      auth: {
        password: BUILDABLE_GITHUB_ACCESS_TOKEN,
        username: BUILDABLE_GITHUB_ACCOUNT_USERNAME,
      },
      data: { body },
    });

    return data;
  } catch (error) {
    return {
      failed: true,
      message: error.message,
      data: error.response.data,
    };
  }
};

/**
 * Verifies the input parameters
 */
const verifyInput = ({
  BUILDABLE_GITHUB_ACCESS_TOKEN,
  BUILDABLE_GITHUB_ACCOUNT_USERNAME,
  owner,
  repo,
  comment_id,
  body,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_GITHUB_ACCESS_TOKEN:
      "A valid BUILDABLE_GITHUB_ACCESS_TOKEN field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_BUILDABLE_GITHUB_ACCOUNT_USERNAME:
      "A valid BUILDABLE_GITHUB_ACCOUNT_USERNAME field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_OWNER: "A valid owner field (string) was not provided in the input.",
    INVALID_REPO: "A valid repo field (string) was not provided in the input.",
    INVALID_COMMENT_ID: "A valid comment_id field (number) was not provided in the input.",
    INVALID_BODY: "A valid body field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_GITHUB_ACCESS_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_GITHUB_ACCESS_TOKEN);
  if (typeof BUILDABLE_GITHUB_ACCOUNT_USERNAME !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_GITHUB_ACCOUNT_USERNAME);
  if (typeof owner !== "string") throw new Error(ERRORS.INVALID_OWNER);
  if (typeof repo !== "string") throw new Error(ERRORS.INVALID_REPO);
  if (typeof comment_id !== "number") throw new Error(ERRORS.INVALID_COMMENT_ID);
  if (typeof body !== "string") throw new Error(ERRORS.INVALID_BODY);
};
