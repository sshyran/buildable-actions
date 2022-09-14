const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const { BUILDABLE_SLACK_ACCESS_TOKEN, session_id, team_id } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://slack.com/api/admin.users.session.invalidate",
      headers: {
        Authorization: `Bearer ${BUILDABLE_SLACK_ACCESS_TOKEN}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({ session_id, team_id }),
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
const verifyInput = ({ BUILDABLE_SLACK_ACCESS_TOKEN, session_id, team_id }) => {
  const ERRORS = {
    INVALID_BUILDABLE_SLACK_ACCESS_TOKEN:
      "A valid BUILDABLE_SLACK_ACCESS_TOKEN field (string) was not provided in the input.",
    INVALID_SESSION_ID: "A valid session_id field (number) was not provided in the input.",
    INVALID_TEAM_ID: "A valid team_id field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_SLACK_ACCESS_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_SLACK_ACCESS_TOKEN);
  if (typeof session_id !== "number") throw new Error(ERRORS.INVALID_SESSION_ID);
  if (typeof team_id !== "string") throw new Error(ERRORS.INVALID_TEAM_ID);
};
