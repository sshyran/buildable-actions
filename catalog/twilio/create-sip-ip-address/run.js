const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_TWILIO_ACCOUNT_SID,
    BUILDABLE_TWILIO_AUTH_TOKEN,
    ipAccessControlListSid,
    friendlyName,
    ipAddress,
    cidrPrefixLength,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.twilio.com/2010-04-01/Accounts/${BUILDABLE_TWILIO_ACCOUNT_SID}/SIP/IpAccessControlLists/${ipAccessControlListSid}/IpAddresses.json`,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      auth: { username: BUILDABLE_TWILIO_ACCOUNT_SID, password: BUILDABLE_TWILIO_AUTH_TOKEN },
      data: qs.stringify({
        FriendlyName: friendlyName,
        IpAddress: ipAddress,
        ...(cidrPrefixLength ? { CidrPrefixLength: cidrPrefixLength } : {}),
      }),
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
  BUILDABLE_TWILIO_ACCOUNT_SID,
  BUILDABLE_TWILIO_AUTH_TOKEN,
  ipAccessControlListSid,
  friendlyName,
  ipAddress,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_TWILIO_ACCOUNT_SID:
      "A valid BUILDABLE_TWILIO_ACCOUNT_SID field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_BUILDABLE_TWILIO_AUTH_TOKEN:
      "A valid BUILDABLE_TWILIO_AUTH_TOKEN field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_IP_ACCESS_CONTROL_LIST_SID:
      "A valid ipAccessControlListSid field (string) was not provided in the input.",
    INVALID_FRIENDLY_NAME: "A valid friendlyName field (string) was not provided in the input.",
    INVALID_IP_ADDRESS: "A valid ipAddress field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TWILIO_ACCOUNT_SID !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWILIO_ACCOUNT_SID);
  if (typeof BUILDABLE_TWILIO_AUTH_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWILIO_AUTH_TOKEN);
  if (typeof ipAccessControlListSid !== "string")
    throw new Error(ERRORS.INVALID_IP_ACCESS_CONTROL_LIST_SID);
  if (typeof friendlyName !== "string") throw new Error(ERRORS.INVALID_FRIENDLY_NAME);
  if (typeof ipAddress !== "string") throw new Error(ERRORS.INVALID_IP_ADDRESS);
};
