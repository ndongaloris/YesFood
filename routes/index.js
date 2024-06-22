const recipes = require("./recipes");
const ingredients = require("./ingredients")
const router = require("express").Router();
const apiDoc = require("./swagger.js");
const oauth = require("./oauth.js");
const login = require("./login.js");
const logout = require("./logout.js");
const passport = require("passport");
const temple = require('./temple');
const users = require("./users");

router.use("/", apiDoc, oauth)
router.use("/recipes", recipes);
router.use("/ingredients", ingredients);
router.use("/users", users);
router.use('/temples', temple);

router.get("/login", passport.authenticate("github"), login);
router.get("/logout", logout);
router.get("/", (req, res) =>{
    res.send(
        req.session.user !== undefined ? `Logged in as ${req.session.user.displayName} <br><a href='/logout'>Log out</a><br><a href='/api-docs'>API Docs</a>` : "<a href='/login'>Login</a>"
    )
})

module.exports = router;