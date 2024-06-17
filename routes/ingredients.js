const router = require("express").Router();
const ingredientController = require("../controllers/ingredients");

router.get("/", ingredientController.getAll);
router.get("/:id", ingredientController.getSingle);
router.post("/create", ingredientController.createIngredient);
router.put("/update/:id", ingredientController.updateIngredient);
router.delete("/delete/:id", ingredientController.deleteIngredient);

module.exports = router;
