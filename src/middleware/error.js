module.exports = (error, req, res) => {
  const code = error.status || 500;
  const { message } = error;
  const { stack } = error;

  res.status(code).json({ message, stack });
};
