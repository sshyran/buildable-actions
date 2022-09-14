const axios = require("axios");

const run = async (input) => {
  const { BUILDABLE_TATUM_API_KEY, BUILDABLE_TATUM_API_URL, id, txId } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "put",
      url: `{TATUM_API_URL}/v3/kms/${id}/${txId}`,
      headers: { "x-api-key": BUILDABLE_TATUM_API_KEY },
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
const verifyInput = ({ BUILDABLE_TATUM_API_KEY, BUILDABLE_TATUM_API_URL, id, txId }) => {
  const ERRORS = {
    INVALID_BUILDABLE_TATUM_API_KEY:
      "A valid BUILDABLE_TATUM_API_KEY field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_BUILDABLE_TATUM_API_URL:
      "A valid BUILDABLE_TATUM_API_URL field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_ID: "A valid id field (string) was not provided in the input.",
    INVALID_TX_ID: "A valid txId field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_KEY);
  if (typeof BUILDABLE_TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_URL);
  if (typeof id !== "string") throw new Error(ERRORS.INVALID_ID);
  if (typeof txId !== "string") throw new Error(ERRORS.INVALID_TX_ID);
};
