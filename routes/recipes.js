const router = require("express").Router();
const recipeController = require("../controllers/recipes");

router.get("/", recipeController.getAll);
router.get("/:id", recipeController.getSingle);
router.post("/create", recipeController.createRecipe);
router.put("/update/:id", recipeController.updateRecipe);
router.delete("/delete/:id", recipeController.deleteRecipe);

module.exports = router;
