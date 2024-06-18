const router = require("express").Router();
const ingredientController = require("../controllers/ingredients");
const validator = require("../middleware/ingredientValidation");

router.get("/", ingredientController.getAll);
router.get("/:id", ingredientController.getSingle);
router.post("/create", validator.saveIngredient, ingredientController.createIngredient);
router.put("/update/:id",validator.updateIngredient, ingredientController.updateIngredient);
router.delete("/delete/:id", ingredientController.deleteIngredient);

module.exports = router;
