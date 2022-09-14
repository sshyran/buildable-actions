const { getConnection } = require("@buildable/mongodb");

const run = async (input) => {
  const { MONGODB_CONNECTION_KEY, collection, field, query = {}, options = {} } = input;

  verifyInput(input);

  try {
    const db = await getConnection(MONGODB_CONNECTION_KEY);

    const results = await db.collection(collection).distinct(field, query, options);

    return results;
  } catch (error) {
    return {
      failed: true,
      message: error.message,
    };
  }
};

const verifyInput = ({ MONGODB_CONNECTION_KEY, collection, query, field }) => {
  const ERRORS = {
    NO_MONGODB_CONNECTION_KEY:
      "A valid MONGODB_CONNECTION_KEY is required. Create your appropriate Database to automatically add it.",
    NO_COLLECTION: "A valid collection name is required.",
    NO_FIELD: "A valid field name is required.",
    INVALID_QUERY: "The query must be an object.",
  };

  if (!MONGODB_CONNECTION_KEY) throw new Error(ERRORS.NO_MONGODB_CONNECTION_KEY);
  if (!collection || typeof collection !== "string") throw new Error(ERRORS.NO_COLLECTION);
  if (!field || typeof field !== "string") throw new Error(ERRORS.NO_FIELD);
  if (query && typeof query !== "object") throw new Error(ERRORS.INVALID_QUERY);
};
