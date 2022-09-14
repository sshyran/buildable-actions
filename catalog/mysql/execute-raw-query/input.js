const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    MYSQL_CONNECTION_KEY: $env.MYSQL_CONNECTION_KEY, // Required
    query: "SELECT id FROM table_name LIMIT 10;",
    maxLimit: 100,
  };
};
