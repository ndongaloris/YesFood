require("dotenv").config();
const express = require("express");
const app = express();
const route = require("./routes");
const session = require("express-session");
const passport = require("passport");
const gitHubStrategy =require("passport-github2").Strategy;
const cors = require("cors");
const db = require("./models");

const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(session(
        {
            secret: "secret",
            resave: false,
            saveUninitialized: true,
        }
    ))
    .use(passport.initialize())
    .use(passport.session())
    .use(cors())
    .use("/", route);

passport.use(new gitHubStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRETS,
    callbackURL: process.env.CALLBACK_URL,
    },
    function(accessToken, refreshToken, profile, done) {
        // User.findOrCreate({ githubId: profile.id }, function (err, user) {
        return done(null, profile);
        // });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
    });

    passport.deserializeUser(function(id, done) {
    // User.findById(id, function (err, user) {
        done(null, user);
    // });
});

process.on('uncaughtException', (err, origin) => {
    console.log(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
});

db.mongoose.connect(db.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () =>{
        console.log(`app listening on ${HOST}:${PORT}`);
    })
    console.log("Databases connected");
}).catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
});