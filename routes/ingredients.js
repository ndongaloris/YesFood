const router = require("express").Router();
const ingredientController = require("../controllers/ingredients");
const { isAuthenticated } = require("../middleware/authenticate");
const validator = require("../middleware/ingredientValidation");

router.get("/:id", ingredientController.getSingle);
router.get("/", ingredientController.getAll);
router.post("/create", isAuthenticated,validator.saveIngredient, ingredientController.createIngredient);
router.put("/update/:id",isAuthenticated ,validator.updateIngredient, ingredientController.updateIngredient);
router.delete("/delete/:id",isAuthenticated, ingredientController.deleteIngredient);

module.exports = router;
