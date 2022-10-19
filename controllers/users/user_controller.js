const userModel = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// const userController = {
//   showProfile: async (req, res) => {
//     let user = null;
//     let userAuth = res.locals.userAuth.data.userId; //this is where the token is saved
//     console.log("----->", userAuth);

//     try {
//       user = await userModel.findOne({ _id: userAuth }); //cos the userAuth email is in a data opbject, when signed token at login
//       if (!user) {
//         return res.status(404).json({ error: "user does not exsits" });
//       }
//       console.log(user);
//       return res.json(user);
//     } catch (err) {
//       return res.status(500).json({ error: "failed to get user" });
//     }
//   },
// };

module.exports = userController;
