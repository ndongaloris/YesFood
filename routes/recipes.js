const router = require("express").Router();
const recipeController = require("../controllers/recipes");
const { isAuthenticated } = require("../middleware/authenticate");
const validator = require("../middleware/recipeValidation")

router.get("/", recipeController.getAll);
router.get("/:id", recipeController.getSingle);
router.post("/create",isAuthenticated, validator.saveRecipe, recipeController.createRecipe);
router.put("/update/:id",isAuthenticated ,validator.updateRecipe, recipeController.updateRecipe);
router.delete("/delete/:id",isAuthenticated, recipeController.deleteRecipe);

module.exports = router;
