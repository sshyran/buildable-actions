const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_SECRET_KEY,
    customer,
    id,
    account_holder_name,
    account_holder_type,
    address_city,
    address_country,
    address_line1,
    address_line2,
    address_state,
    address_zip,
    exp_month,
    exp_year,
    expand,
    metadata,
    name,
    owner,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.stripe.com/v1/customers/${customer}/cards/${id}`,
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_SECRET_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(account_holder_name ? { account_holder_name } : {}),
        ...(account_holder_type ? { account_holder_type } : {}),
        ...(address_city ? { address_city } : {}),
        ...(address_country ? { address_country } : {}),
        ...(address_line1 ? { address_line1 } : {}),
        ...(address_line2 ? { address_line2 } : {}),
        ...(address_state ? { address_state } : {}),
        ...(address_zip ? { address_zip } : {}),
        ...(exp_month ? { exp_month } : {}),
        ...(exp_year ? { exp_year } : {}),
        ...(expand ? { expand } : {}),
        ...(metadata ? { metadata } : {}),
        ...(name ? { name } : {}),
        ...(owner ? { owner } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_SECRET_KEY, customer, id }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_SECRET_KEY:
      "A valid BUILDABLE_STRIPE_SECRET_KEY field (string) was not provided in the input.",
    INVALID_CUSTOMER: "A valid customer field (string) was not provided in the input.",
    INVALID_ID: "A valid id field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_SECRET_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_SECRET_KEY);
  if (typeof customer !== "string") throw new Error(ERRORS.INVALID_CUSTOMER);
  if (typeof id !== "string") throw new Error(ERRORS.INVALID_ID);
};
