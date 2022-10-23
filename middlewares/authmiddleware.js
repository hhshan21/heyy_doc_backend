const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // cookie is called token as defined in user_ctrller that's why req.cookies.token
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json("No token found");
  }

  try {
    // now have the cookie, will verify the token to obtain the data.
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.userID = data.id;
    return next();
  } catch (err) {
    return res.status(403).json("Invalid auth token");
  }
};

module.exports = authMiddleware;
