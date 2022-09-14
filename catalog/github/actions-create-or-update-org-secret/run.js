const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_GITHUB_ACCESS_TOKEN,
    BUILDABLE_GITHUB_ACCOUNT_USERNAME,
    org,
    secret_name,
    visibility,
    encrypted_value,
    key_id,
    selected_repository_ids,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "put",
      url: `https://api.github.com/orgs/${org}/actions/secrets/${secret_name}`,
      auth: {
        password: BUILDABLE_GITHUB_ACCESS_TOKEN,
        username: BUILDABLE_GITHUB_ACCOUNT_USERNAME,
      },
      data: {
        visibility,
        ...(encrypted_value ? { encrypted_value } : {}),
        ...(key_id ? { key_id } : {}),
        ...(selected_repository_ids ? { selected_repository_ids } : {}),
      },
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
  org,
  secret_name,
  visibility,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_GITHUB_ACCESS_TOKEN:
      "A valid BUILDABLE_GITHUB_ACCESS_TOKEN field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_BUILDABLE_GITHUB_ACCOUNT_USERNAME:
      "A valid BUILDABLE_GITHUB_ACCOUNT_USERNAME field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_ORG: "A valid org field (string) was not provided in the input.",
    INVALID_SECRET_NAME: "A valid secret_name field (string) was not provided in the input.",
    INVALID_VISIBILITY: "A valid visibility field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_GITHUB_ACCESS_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_GITHUB_ACCESS_TOKEN);
  if (typeof BUILDABLE_GITHUB_ACCOUNT_USERNAME !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_GITHUB_ACCOUNT_USERNAME);
  if (typeof org !== "string") throw new Error(ERRORS.INVALID_ORG);
  if (typeof secret_name !== "string") throw new Error(ERRORS.INVALID_SECRET_NAME);
  if (typeof visibility !== "string") throw new Error(ERRORS.INVALID_VISIBILITY);
};
