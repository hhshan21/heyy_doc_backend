const db = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userController = {
  register: async (req, res) => {
    try {
      const passHash = await bcrypt.hash(req.body.password, 10);
      const [user, created] = await db.user.findOrCreate({
        where: {
          email: req.body.email,
        },
        defaults: { ...req.body, password: passHash },
      });
      if (created) {
        return res.status(201).json("New user is created");
      } else {
        return res.status(201).json("Email already exists");
      }
    } catch (err) {
      console.log("err: ", err);
      return res.status(500).json({ error: "Failed to register user" });
    }
  },

  login: async (req, res) => {
    let errMsg = "User email or password is incorrect";
    let user = null;

    try {
      user = await db.user.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (!user) {
        return res.status(401).json({ error: errMsg });
      }
    } catch (err) {
      return res.status(500).json({ error: "failed to get user" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({ error: errMsg });
    }

    // generate JWT and return as response
    //even with signature  jwt does not solve confidentiality,it only ensures that is not tempered with
    //we can be sure that the pay load is the original sender details, signature is used to verify that its is authentic
    //secret is set in every server, so any server can check its authentication
    //change the schema obj to plain js object

    const userData = {
      userId: user.id,
      email: user.email,
    };

    //gnerate the token, that will pass to FE, afte the login req then set in local with this token
    //token will pass back to BE through post/patch and go through authmiddleware to routes that requires authorization
    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 120, // 1 hour
        data: userData,
      },
      process.env.JWT_SECRET
    );
    //go try in the jwt.io past in encoded to see wad you get backk
    //get from post man cos it will res.json there it will an {}, token : encryptions

    return res.json({ token });
  },

  logout: async (req, res) => {
    let userAuth = res.locals.userAuth; //this is where the token is saved
    console.log("token backend:", userAuth);

    try {
      //if token is not there, immediately logout
      if (!userAuth) {
        return res.status(404).json({ error: "token is not found" });
      }
    } catch (err) {
      console.log(err);
      res.status(404).json({ err: "unable to logout" });
    }

    res.status(200).json("Logout successful!");
  },

  showProfile: async (req, res) => {
    let user = null;
    let userAuth = res.locals.userAuth; // this is where user is authenticated

    //this is redundant, security, defence indepth
    if (!userAuth) {
      return res.status(401).json();
    }

    try {
      user = await db.user.findOne({
        where: {
          email: userAuth.data.email,
        },
      }); //cos the userAuth email is in an object when at login
      if (!user) {
        return res.status(404).json({ error: "user not found" });
      }
      console.log("user.get(): ", user.get());
      return res.json(user.get());
    } catch (err) {
      return res.status(500).json({ error: "failed to get user" });
    }
  },

  editProfile: async (req, res) => {
    let user = null;
    let userAuth = res.locals.userAuth; // this is where user is authenticated

    //this is redundant, security, defence indepth
    if (!userAuth) {
      return res.status(401).json();
    }

    try {
      await db.user.update(
        { ...req.body },
        {
          where: {
            email: userAuth.data.email,
          },
        }
      );
      return res.status(200).json("Profile edited");
    } catch (err) {
      return res.status(500).json({ error: "failed to get user" });
    }
  },
};

module.exports = userController;
