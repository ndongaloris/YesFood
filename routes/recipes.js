const router = require("express").Router();
const recipeController = require("../controllers/recipes");
const validator = require("../middleware/recipeValidation")

router.get("/", recipeController.getAll);
router.get("/:id", recipeController.getSingle);
router.post("/create",validator.saveRecipe, recipeController.createRecipe);
router.put("/update/:id",validator.updateRecipe, recipeController.updateRecipe);
router.delete("/delete/:id", recipeController.deleteRecipe);

module.exports = router;
