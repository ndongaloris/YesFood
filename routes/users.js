const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");
const validator = require("../middleware/contactValidate");
const { isAuthenticated } = require("../middleware/authenticate");

router.get("/", userController.getAll);
router.get("/:id", userController.getSingle);
router.post("/",isAuthenticated, validator.saveContact, userController.createUser);
router.put("/id-to-modify/:id",isAuthenticated, validator.updateContact, userController.updateUser);
router.delete("/:id",isAuthenticated, userController.deleteUser);

module.exports = router;