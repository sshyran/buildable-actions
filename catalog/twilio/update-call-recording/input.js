const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_TWILIO_ACCOUNT_SID: $env.BUILDABLE_TWILIO_ACCOUNT_SID, // Required
    BUILDABLE_TWILIO_AUTH_TOKEN: $env.BUILDABLE_TWILIO_AUTH_TOKEN, // Required
    callSid: "string", // Required
    sid: "string", // Required
    status: "in-progress", // Required

    // pauseBehavior: "string",
  };
};
