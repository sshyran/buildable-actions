const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_SECRET_KEY: $env.BUILDABLE_STRIPE_SECRET_KEY, // Required

    // bank_account: {
    //     account_holder_name: "string",
    //     account_holder_type: "company",
    //     account_number: "string",
    //     account_type: "checking",
    //     country: "string",
    //     currency: "string",
    //     object: "bank_account",
    //     routing_number: "string"
    //   },
    // default_for_currency: true,
    // expand: ["string"],
    // external_account: "string",
    // metadata: { property1: "string", property2: "string" },
  };
};
