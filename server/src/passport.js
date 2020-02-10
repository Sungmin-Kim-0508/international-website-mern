import passport from "passport";
import GoogleStrategyOauth2 from "passport-google-oauth";
import { oauthGoogleCallback } from "./controllers/userController";
import routes from "./routes";

const GoogleStrategy = GoogleStrategyOauth2.OAuth2Strategy;
// GOOGLE OAUTH STRATEGY
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `http://localhost:4000${routes.oauthGoogleCallback}`
    },
    oauthGoogleCallback
  )
);

// // import local from "passport-local";
// import User from "./model/User";

// passport.use(User.createStrategy());

// // const LocalStrategy = local.Strategy;

// // passport.use(
// //   new LocalStrategy({ usernameField: "email" }, (name, password, done) => {
// //     User.findOne(
// //       {
// //         name: name
// //       },
// //       (err, user) => {
// //         if (err) {
// //           console.log("something went wrong\n", err);
// //           done(err);
// //         }
// //         if (!user) {
// //           return done(null, false, { message: "User not found" });
// //         } else {
// //           return done(null, user);
// //         }
// //       }
// //     );
// //   })
// // );

// // serialization means what information we are going to give cookies
// // Usually people put user.id to cookies and find the users by user.id
// passport.serializeUser(User.serializeUser());
// // deserialization means how you find which user is
// passport.deserializeUser(User.deserializeUser());
