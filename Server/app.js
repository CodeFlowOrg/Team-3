
require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require("mongoose-findorcreate");
const TwitterStrategy = require("passport-twitter");

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/userDb", {
    useNewUrlParser: true
});

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    googleId: String,
    twitterId: String,
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
    done(null, user.id);
});
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});
/////////////////////////GOOGLE STRATEGY///////////////////////////////
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/dashboard",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
},
    function (accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ username: profile.displayName, googleId: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }
));
//////////////////////TWITTER STRATEGY//////////////////////
passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_KEY,
    consumerSecret: process.env.TWITTER_SECRET,
    callbackURL: "http://localhost:3000/auth/twitter/dashboard"
},
    function (token, tokenSecret, profile, cb) {

        User.findOrCreate({ twitterId: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }
));

/////////////////////FACEBOOK STRATEGY///will be added once hosted(privacy issue of http on FB)///

app.get("/signup", function (req, res) {
    res.render("signup");
});

//////////////////GOOOGLE ROUTES/////////////////////
app.get("/auth/google",
    passport.authenticate("google", { scope: ["profile"] })
);

app.get('/auth/google/dashboard',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/dashboard');
    });

//////////////////TWITTER ROUTES///////////////////////
app.get('/auth/twitter',
    passport.authenticate('twitter'));

app.get('/auth/twitter/dashboard',
    passport.authenticate('twitter', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/dashboard');
    });

app.get("/login", function (req, res) {
    res.render("login");
})

app.get("/dashboard", function (req, res) {
    if (req.isAuthenticated()) {
        res.render("dashboard");
    }
    else {
        res.redirect("/login");
    }
});

app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/login");
})

app.post("/signup", function (req, res) {

    User.register({ username: req.body.username }, req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            res.redirect("/signup");
        }
        else {
            passport.authenticate("local")(req, res, function () {
                res.redirect("/dashboard");
            });
        }
    });
});

app.post("/login", function (req, res) {

    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            passport.authenticate("local")(req, res, function () {
                res.redirect("/dashboard");
            });
        }
    });
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
})



