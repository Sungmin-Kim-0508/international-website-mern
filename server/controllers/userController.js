import dotenv from "dotenv";
dotenv.config();
import User from "../model/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import passport from "passport";
import nodemailer from "nodemailer";
import crypto from "crypto";

export const getSignUp = (req, res) => {
  res.send("Sign Up");
};

export const postSignUp = async (req, res, next) => {
  const { name, email, password, password2 } = req.body;

  if (!name || !email || !password || !password2) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  if (password !== password2)
    return res.status(400).json({ msg: "Password Does Not Match" });

  try {
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });

    const newUser = new User({
      name,
      email,
      password
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then(user => {
          jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;

              // it passes 'user: {name, email, password}' to
              // the next middleware which is postSignIn
              next();
            }
          );
        });
      });
    });
  } catch (error) {
    res.status(500).json({ msg: `Internal Server Error : ${error}` });
  }
};

export const getSignIn = (req, res) => {
  res.send("Get Sign In");
};

export const postSignIn = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ msg: "User Does Not Exist" });

    bcrypt.compare(password, user.password).then(isMatch => {
      // isMatch returns true/false
      if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

      jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) {
            throw err;
          } else {
            res.send({
              token,
              user: {
                id: user._id,
                name: user.name,
                email: user.email
              }
            });
          }
        }
      );
    });
  } catch (error) {
    req.status(500).json({ msg: `Internal Server Error : ${error}` });
  }
};

export const postEditProfile = async (req, res) => {
  const { id } = req.params;
  const { avatarUrl, name, email } = req.body;

  try {
    const user = await User.findById(id);
    user.name = name;
    user.email = email;
    // user.avatarUrl = avatarUrl;
    user.save();
    res.send("postEditProfile");
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const postValidateAuth = passport.authenticate("local", {
  failureRedirect: "/unauthorized"
});

/**
 *  METHOD      : GET
 *  URL         : /userInfo
 *  DESCRIPTION : Getting the user infomation if the user is authenticated.
 */
export const getUserInfo = (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then(user => res.send(user))
    .catch(err => {
      console.log("from getUserInfo in userController.js");
      console.log(err);
      // res.json({ err });
    });
};

/**
 *  METHOD        : POST
 *  URL           : /oauth/google
 *  DESCRIPTION   : Use react-google-login to get the google authentication information.
 */

export const postGoogleLogin = async (req, res) => {
  const {
    profileObj: { googleId, email, name, imageUrl }
  } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      user.avatarUrl = imageUrl;
      user.googleId = googleId;
      user.save();
      jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { algorithm: "HS384", expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.send({
            token,
            user
          });
        }
      );
    } else {
      const newUser = new User({
        name,
        email,
        googleId,
        avatarUrl: imageUrl
      });

      newUser.save().then(user => {
        jwt.sign(
          { id: user._id },
          process.env.JWT_SECRET,
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            const user = newUser;
            res.send({ user, token });
          }
        );
      });
    }
  } catch (error) {
    res.status(500).json({ msg: `Internal Server Error : ${error}` });
  }
};

/**
 *  METHOD        : POST
 *  URL           : /oauth/facebook
 *  DESCRIPTION   : Use react-facebook-login to get the facebook authentication information.
 *  REQUEST BODY  : {email, id, name, imageUrl}
 */
export const postFacebookLogin = async (req, res) => {
  const {
    profileObj: { facebookId, email, name, imageUrl }
  } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      user.facebookId = facebookId;
      user.save();
      jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { algorithm: "HS384", expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.send({
            token,
            user
          });
        }
      );
    } else {
      const newUser = new User({
        name,
        email,
        facebookId,
        avatarUrl: imageUrl
      });

      newUser.save().then(user => {
        jwt.sign(
          { id: user._id },
          process.env.JWT_SECRET,
          { expiresIn: 3600 },
          // { expiresIn: 1 },
          (err, token) => {
            if (err) throw err;
            const user = newUser;
            res.send({ user, token });
          }
        );
      });
    }
  } catch (error) {
    res.status(500).json({ msg: `Internal Server Error : ${error}` });
  }
};

/**
 *  METHOD        : POST
 *  URL           : /forget-password
 *  DESCRIPTION   : Send the email that requests to reset password
 *  REQUEST BODY  : {email}
 */

export const postForgetPassword = async (req, res) => {
  const { email } = req.body;
  console.log(email);

  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.send("There is no account with that email");
    }

    const token = crypto.randomBytes(20).toString("hex");
    console.log(token);
    user.update({
      resetPasswordToken: token,
      resetPasswordExpires: Date.now() + 360000 // 1 hour
    });

    let transporter = nodemailer.createTransport({
      service: "Gmail",
      // Recommend you to use another Gmail account
      // that doesn't have important information for auth properties
      auth: {
        user: `${process.env.DO_NOT_REPLY_EMAIL_ADDRESS}`,
        password: `${process.env.DO_NOT_REPLY_EMAIL_PASSWORD}`
      }
    });

    const mailOption = {
      from: "do-not-reply-this-email@gmail.com",
      to: `${user.email}`,
      subject: `Reset Password`,
      text:
        `You are receiving this vecause you have requested the reset of the password for your account.\n\n` +
        `Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n` +
        `http://localhost:4000/reset/${token}\n\n` +
        `If you did not request this, please ignore this email and your password will remain unchanged.\n`
    };

    transporter.sendMail(mailOption, (err, res) => {
      if (err) {
        console.log(`there is error: ${err}`);
        // res.status(400).send(`Errors from /forget-password ${err}`);
      }
      res.json("Recovery email sent");
    });
  } catch (error) {
    res.status(500).send(`Internal Server Error: ${error} `);
  }
};

export const oauthGoogleCallback = (accessToken, refreshToken, profile, cb) => {
  console.log("access token", accessToken);
  console.log("refresh token", refreshToken);
  console.log("profile", profile);
  console.log("cb", cb);
};

export const oauthGoogleLogin = passport.authenticate("google", {
  scope: ["profile"]
});

export const getUnauthorized = (req, res) => {
  console.log("unauthroized access");
  res.send("unauthroized");
};
export const signOut = (req, res) => res.send("Sign Out");
export const users = (req, res) => res.send("Users");
export const userDetail = (req, res) => res.send("User Detail");
export const changePassword = (req, res) => res.send("Change Password");
