const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const { BUILDABLE_STRIPE_SECRET_KEY, domain_name, ending_before, expand, limit, starting_after } =
    input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "get",
      url: "https://api.stripe.com/v1/apple_pay/domains",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_SECRET_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      params: {
        ...(domain_name ? { domain_name } : {}),
        ...(ending_before ? { ending_before } : {}),
        ...(expand ? { expand } : {}),
        ...(limit ? { limit } : {}),
        ...(starting_after ? { starting_after } : {}),
      },
    });

    return data;
  } catch (error) {
    return {
      failed: true,
      message: error?.message,
      data: error?.response?.data,
    };
  }
};

/**
 * Verifies the input parameters
 */
const verifyInput = ({ BUILDABLE_STRIPE_SECRET_KEY }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_SECRET_KEY:
      "A valid BUILDABLE_STRIPE_SECRET_KEY field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_SECRET_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_SECRET_KEY);
};
