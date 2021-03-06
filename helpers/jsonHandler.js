const jwt = require("jsonwebtoken");

function getToken(payload) {
  return jwt.sign(payload, process.env.SECRET_KEY);
}

function verifyToken(token) {
  return jwt.verify(token, process.env.SECRET_KEY);
}

module.exports = {
  getToken,
  verifyToken,
};