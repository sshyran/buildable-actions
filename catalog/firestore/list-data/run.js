const { getConnection } = require("@buildable/firestore");

const MISSING_START_AT_FIELD_IN_SORT_ERROR = "sort must contain the startAtField";

const run = async (input) => {
  const {
    FIRESTORE_CONNECTION_KEY,
    collection,
    query,
    fields = [],
    pageSize = 10,
    startAt,
    startAtField,
    sort = {},
  } = input;

  verifyInput(input);

  try {
    const db = await getConnection(FIRESTORE_CONNECTION_KEY);

    let _query = await db.collection(collection);

    if (Array.isArray(query)) {
      if (Array.isArray(query[0])) {
        // multiple queries
        for (let q of query) {
          _query = _query.where(...q);
        }
      } else {
        _query = _query.where(...query);
      }
    }

    if (fields.length > 0) {
      _query = _query.select(...fields);
    }

    if (pageSize > 200) {
      throw new Error("The optimized value for pageSize is less than or equal to 200");
    }

    _query = _query.limit(pageSize);

    let sortKeys = Object.keys(sort);
    if (sortKeys.length > 0) {
      sortKeys.forEach((key) => {
        if (sort[key] === -1) {
          _query = _query.orderBy(key, "desc");
        } else {
          _query = _query.orderBy(key, "asc");
        }
      });
    }

    if (startAt) {
      if (!sortKeys.includes(startAtField)) {
        throw new Error(MISSING_START_AT_FIELD_IN_SORT_ERROR);
      }
      _query = _query.startAt(startAt);
    }

    const snapshot = await _query.get();

    const rows = [];

    snapshot.forEach((doc) => rows.push({ ...doc.data(), id: doc.id }));

    return {
      rows,
      startAt,
      pageSize,
    };
  } catch (error) {
    return {
      failed: true,
      message: error.message,
      data: {},
    };
  }
};

const verifyInput = ({
  FIRESTORE_CONNECTION_KEY,
  collection,
  query,
  fields,
  pageSize = 10,
  sort = { createdAt: -1 },
}) => {
  const ERRORS = {
    NO_FIRESTORE_CONNECTION_KEY:
      "A valid FIRESTORE_CONNECTION_KEY is required. Create your appropriate Database to automatically add it.",
    NO_COLLECTION: "A valid collection name is required.",
    INVALID_QUERY: "The query must be an array.",
    INVALID_PAGESIZE: "The pageSize must be a number.",
    INVALID_PAGE: "The page must be a number.",
    INVALID_SORT: "The sort must be an object.",
    INVALID_FIELDS: "The fields must be an array.",
  };

  if (!FIRESTORE_CONNECTION_KEY) throw new Error(ERRORS.NO_FIRESTORE_CONNECTION_KEY);
  if (!collection || typeof collection !== "string") throw new Error(ERRORS.NO_COLLECTION);
  if (query && !Array.isArray(query)) throw new Error(ERRORS.INVALID_QUERY);
  if (pageSize && typeof pageSize !== "number") throw new Error(ERRORS.INVALID_PAGESIZE);
  if (sort && typeof sort !== "object") throw new Error(ERRORS.INVALID_SORT);
  if (fields && !Array.isArray(fields)) throw new Error(ERRORS.INVALID_FIELDS);
};
