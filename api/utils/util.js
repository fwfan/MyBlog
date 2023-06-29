exports.parseSuccessResult = (result = [], total = 0, message = "") => ({
  success: true,
  result,
  total,
  message,
});

exports.parseFailedResult = (message = "") => ({
  success: false,
  message,
});

exports.parseQuery = (query = {}) => {
  return { ...JSON.parse(query.query) };
};
