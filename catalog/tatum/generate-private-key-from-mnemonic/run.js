const axios = require("axios");

const run = async (input) => {
  const { BUILDABLE_TATUM_API_KEY, BUILDABLE_TATUM_API_URL, mnemonic, index } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "{TATUM_API_URL}/v3/qtum/wallet/priv",
      headers: { "x-api-key": BUILDABLE_TATUM_API_KEY },
      data: { mnemonic, index },
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
const verifyInput = ({ BUILDABLE_TATUM_API_KEY, BUILDABLE_TATUM_API_URL, mnemonic, index }) => {
  const ERRORS = {
    INVALID_BUILDABLE_TATUM_API_KEY:
      "A valid BUILDABLE_TATUM_API_KEY field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_BUILDABLE_TATUM_API_URL:
      "A valid BUILDABLE_TATUM_API_URL field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_MNEMONIC: "A valid mnemonic field (string) was not provided in the input.",
    INVALID_INDEX: "A valid index field (number) was not provided in the input.",
  };

  if (typeof BUILDABLE_TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_KEY);
  if (typeof BUILDABLE_TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_URL);
  if (typeof mnemonic !== "string") throw new Error(ERRORS.INVALID_MNEMONIC);
  if (typeof index !== "number") throw new Error(ERRORS.INVALID_INDEX);
};
