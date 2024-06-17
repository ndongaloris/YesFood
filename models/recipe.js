const { Int32 } = require("mongodb");

module.exports = (mongoose) => {
    const Recipe = mongoose.model(
        "recipes", mongoose.Schema({
            congoleseName: String,
            frenchName: String,
            englishName: String,
            otherName: String,
            cuisine: String,
            description: String,
            ingredient: Array,
            instruction: String,
            cookingTime: String,
            serving: Number,
            videoLink: String,
        })
    )
    return Recipe;
}