const recipes = require("./recipes");
const ingredients = require("./ingredients")
const router = require("express").Router();
const apiDoc = require("./swagger.js");

router.use("/", apiDoc)
router.use("/recipes", recipes);
router.use("/ingredients", ingredients)


router.get("/", (req, res) =>{
    res.send("Hello YesFood");
})

module.exports = router;