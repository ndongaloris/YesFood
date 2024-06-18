const db = require("../models/index");
const dbModel = db.ingredients;
const ObjectId = require("mongodb").ObjectId;

const getAll = (req, res) =>{
    dbModel.find().then((data) =>{
        res.status(200).send(data);
    }).catch((err) =>{
        throw Error("something is wrong with the getAll", err);
    })
}
const getSingle = (req, res) =>{
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid contact id to find the ingredient.');
    }
    const ingredientId = new ObjectId(req.params.id);
    dbModel.findOne({_id: ingredientId}).then((data) =>{
        res.status(200).send(data);
    }).catch((err) =>{
        throw Error("something is wrong with the getSingle", err);
    })
}

const createIngredient =  (req, res) =>{
    const newDoc = new dbModel({
        frenchName: req.body.frenchName,
        englishName: req.body.englishName,
        otherName: req.body.otherName,
        description: req.body.description,
        origin: req.body.origin,
        congoleseName: req.body.congoleseName,
    })
    
    newDoc.save(newDoc).then((data) =>{
        res.status(200).send(data);
    }).catch((err) =>{
        throw Error("something is wrong with the createIngredient", err)
    })
}

const deleteIngredient = (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid contact id to find the ingredient.');
    }
    const ingredientId = new ObjectId(req.params.id);
    dbModel.deleteOne({_id: ingredientId}).then((data) =>{
        res.status(200).send(data);
    }).catch((err) =>{
        throw Error("something is wrong with the de", err)
    })
}

const updateIngredient = (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid contact id to find the ingredient.');
    }
    const ingredientId = new ObjectId(req.params.id);
    const newDoc = {}
        if (req.body.congoleseName !== undefined) newDoc.congoleseName = req.body.congoleseName;
        if (req.body.frenchName !== undefined) newDoc.frenchName = req.body.frenchName;
        if (req.body.englishName !== undefined) newDoc.englishName = req.body.englishName;
        if (req.body.otherName !== undefined) newDoc.otherName = req.body.otherName;
        if (req.body.origin !== undefined) newDoc.origin = req.body.origin;
        if (req.body.description !== undefined) newDoc.description = req.body.description;

    dbModel.updateOne({_id: ingredientId}, {$set: newDoc}).then((data) =>{
        res.status(200).send(data);
    }).catch((err) =>{
        throw Error("something is wrong with the updateIngredient", err)
    })
}


module.exports = {
    getAll,
    getSingle,
    deleteIngredient,
    updateIngredient,
    createIngredient
};
