const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_SECRET_KEY,
    name,
    payload,
    scope,
    expand,
    scopeType,
    scopeUser,
    expand0,
    expand1,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.stripe.com/v1/apps/secrets",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_SECRET_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        name,
        payload,
        scope,
        ...(expand ? { expand } : {}),
        ...(scopeType ? { "scope[type]": scopeType } : {}),
        ...(scopeUser ? { "scope[user]": scopeUser } : {}),
        ...(expand0 ? { "expand[0]": expand0 } : {}),
        ...(expand1 ? { "expand[1]": expand1 } : {}),
      }),
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
const verifyInput = ({ BUILDABLE_STRIPE_SECRET_KEY, name, payload, scope }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_SECRET_KEY:
      "A valid BUILDABLE_STRIPE_SECRET_KEY field (string) was not provided in the input.",
    INVALID_NAME: "A valid name field (string) was not provided in the input.",
    INVALID_PAYLOAD: "A valid payload field (string) was not provided in the input.",
    INVALID_SCOPE: "A valid scope field (object) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_SECRET_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_SECRET_KEY);
  if (typeof name !== "string") throw new Error(ERRORS.INVALID_NAME);
  if (typeof payload !== "string") throw new Error(ERRORS.INVALID_PAYLOAD);
  if (typeof scope !== "object") throw new Error(ERRORS.INVALID_SCOPE);
};
