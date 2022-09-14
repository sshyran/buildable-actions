const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_TATUM_API_KEY,
    BUILDABLE_TATUM_API_URL,
    to,
    currency,
    amount,
    fromPrivateKey,
    message,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "{TATUM_API_URL}/v3/bnb/transaction",
      headers: { "x-api-key": BUILDABLE_TATUM_API_KEY },
      data: { to, currency, amount, fromPrivateKey, ...(message ? { message } : {}) },
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
  BUILDABLE_TATUM_API_KEY,
  BUILDABLE_TATUM_API_URL,
  to,
  currency,
  amount,
  fromPrivateKey,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_TATUM_API_KEY:
      "A valid BUILDABLE_TATUM_API_KEY field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_BUILDABLE_TATUM_API_URL:
      "A valid BUILDABLE_TATUM_API_URL field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_TO: "A valid to field (string) was not provided in the input.",
    INVALID_CURRENCY: "A valid currency field (string) was not provided in the input.",
    INVALID_AMOUNT: "A valid amount field (string) was not provided in the input.",
    INVALID_FROM_PRIVATE_KEY:
      "A valid fromPrivateKey field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_KEY);
  if (typeof BUILDABLE_TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_URL);
  if (typeof to !== "string") throw new Error(ERRORS.INVALID_TO);
  if (typeof currency !== "string") throw new Error(ERRORS.INVALID_CURRENCY);
  if (typeof amount !== "string") throw new Error(ERRORS.INVALID_AMOUNT);
  if (typeof fromPrivateKey !== "string") throw new Error(ERRORS.INVALID_FROM_PRIVATE_KEY);
};
