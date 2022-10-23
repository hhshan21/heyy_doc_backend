const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // cookie is called token as defined in user_ctrller that's why req.cookies.token
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json("No token found");
  }

  try {
    // now have the cookie, will verify the token to obtain the verifiedData.
    const verifiedData = jwt.verify(token, process.env.JWT_SECRET);
    res.locals.userAuth = verifiedData;

    return next();
  } catch (err) {
    return res.status(401).json("Invalid auth token");
  }
};

module.exports = authMiddleware;
