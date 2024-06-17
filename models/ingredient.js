module.exports = (mongoose) => {
    const Ingredient = mongoose.model(
        "ingredients", 
        mongoose.Schema({
            congoleseName: String,
            frenchName: String,
            englishName: String,
            otherName: String,
            origin: String,
            description: String,
        })
    );
    return Ingredient;
}