const validator = require('../helpers/validate');

const saveRecipe = (req, res, next) => {
    const validationRule = {
        congoleseName: "required|string",
        frenchName: "required|string",
        englishName: "required|string",
        cuisine: "required|string",
        description: "required|string",
        ingredients: "array",
        instruction: "string",
        cookingTime: "string",
        serving: "number",
        videoLink: "string",
        otherName: "string",
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(400).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};
const updateRecipe = (req, res, next) => {
    const validationRule = {
        congoleseName: "string",
        frenchName: "string",
        englishName: "string",
        cuisine: "string",
        description: "string",
        ingredients: "array",
        instruction: "string",
        cookingTime: "string",
        serving: "number",
        videoLink: "string",
        otherName: "string",
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(400).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

module.exports = {
    saveRecipe,
    updateRecipe
};