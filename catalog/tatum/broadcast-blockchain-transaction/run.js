const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_TATUM_API_KEY,
    BUILDABLE_TATUM_API_URL,
    currency,
    txData,
    withdrawalId,
    signatureId,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "{TATUM_API_URL}/v3/offchain/withdrawal/broadcast",
      headers: { "x-api-key": BUILDABLE_TATUM_API_KEY },
      data: {
        currency,
        txData,
        ...(withdrawalId ? { withdrawalId } : {}),
        ...(signatureId ? { signatureId } : {}),
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
const verifyInput = ({ BUILDABLE_TATUM_API_KEY, BUILDABLE_TATUM_API_URL, currency, txData }) => {
  const ERRORS = {
    INVALID_BUILDABLE_TATUM_API_KEY:
      "A valid BUILDABLE_TATUM_API_KEY field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_BUILDABLE_TATUM_API_URL:
      "A valid BUILDABLE_TATUM_API_URL field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_CURRENCY: "A valid currency field (string) was not provided in the input.",
    INVALID_TX_DATA: "A valid txData field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_KEY);
  if (typeof BUILDABLE_TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_URL);
  if (typeof currency !== "string") throw new Error(ERRORS.INVALID_CURRENCY);
  if (typeof txData !== "string") throw new Error(ERRORS.INVALID_TX_DATA);
};
