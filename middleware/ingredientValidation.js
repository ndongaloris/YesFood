const validator = require('../helpers/validate');

const saveIngredient = (req, res, next) => {
    const validationRule = {
        frenchName: "required|string",
        englishName: "required|string",
        origin: "required|string",
        description: "required|string",
        otherName: "string",
        congoleseName: "string",
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

const updateIngredient = (req, res, next) => {
    const validationRule = {
        congoleseName: "string",
        frenchName: "string",
        englishName: "string",
        description: "string",
        otherName: "string",
        origin: "string",
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
    updateIngredient,
    saveIngredient
};