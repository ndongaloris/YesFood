const db = require("../models/index");
const ingredient = require("../models/ingredient");
const dbModel = db.recipes;
const ObjectId = require("mongodb").ObjectId

const getAll = (req, res) =>{
    dbModel.find().then((data) =>{
        res.send(data);
    }).catch((err) =>{
        throw Error("something is wrong with the getAll", err);
    })
    
}
const getSingle = (req, res) =>{
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid contact id to find a contact.');
    }
    const recipeId = new ObjectId(req.params.id);
    dbModel.findOne({_id: recipeId}).then((data) =>{
        res.send(data);
    }).catch((err) =>{
        throw Error("something is wrong with the getSingle", err);
    })
}

const createRecipe = (req, res) =>{
    const newDoc = new dbModel({
        congoleseName: req.body.congoleseName,
        frenchName: req.body.frenchName,
        englishName: req.body.englishName,
        otherName: req.body.otherName,
        cuisine: req.body.cuisine,
        description: req.body.description,
        ingredient: req.body.ingredient,
        instruction: req.body.instruction,
        cookingTime: req.body.cookingTime,
        serving: req.body.serving,
        videoLink: req.body.videoLink,
    })
    newDoc.save(newDoc).then((data) =>{
        res.send(data);
    }).catch((err) =>{
        throw Error("something is wrong with the createRecipe", err)
    })
}

const deleteRecipe = (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid contact id to find a contact.');
    }
    const recipeId = new ObjectId(req.params.id);
    dbModel.deleteOne({_id: recipeId}).then((data) =>{
        res.send(data);
    }).catch((err) =>{
        throw Error("something is wrong with the deleteRecipe", err)
    })
}

const updateRecipe = (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid contact id to find a contact.');
    }
    const recipeId = new ObjectId(req.params.id);
    const newDoc = {}
        if (req.body.congoleseName !== undefined) newDoc.congoleseName = req.body.congoleseName;
        if (req.body.frenchName !== undefined) newDoc.frenchName = req.body.frenchName;
        if (req.body.englishName !== undefined) newDoc.englishName = req.body.englishName;
        if (req.body.otherName !== undefined) newDoc.otherName = req.body.otherName;
        if (req.body.cuisine !== undefined) newDoc.cuisine = req.body.cuisine;
        if (req.body.description !== undefined) newDoc.description = req.body.description;
        if (req.body.recipe !== undefined) newDoc.recipe = req.body.recipe;
        if (req.body.instruction !== undefined) newDoc.instruction = req.body.instruction;
        if (req.body.cookingTime !== undefined) newDoc.cookingTime = req.body.cookingTime;
        if (req.body.serving !== undefined) newDoc.serving = req.body.serving;
        if (req.body.videoLink !== undefined) newDoc.videoLink = req.body.videoLink;

    dbModel.updateOne({_id: recipeId}, {$set: newDoc}).then((data) =>{
        res.send(data);
    }).catch((err) =>{
        throw Error("something is wrong with the updateRecipe", err)
    })
}


module.exports = {
    getAll,
    getSingle,
    deleteRecipe,
    updateRecipe,
    createRecipe
};
