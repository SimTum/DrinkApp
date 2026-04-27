import mongoose from "mongoose";

const IngredientSchema = mongoose.Schema(
    {
idIngredient:
	{
        type: String,
        required: true
    },
strIngredient:
	{
        type: String,
        required: true
    },
strDescription:
	{
        type: String,
        required: false
    },
strType:
	{
        type: String,
        required: false
    },
strAlcohol:
	{
        type: String,
        required: true
    },
strABV:
	{
        type: String,
        required: false
    },

    }
  

);

const Ingredient = mongoose.model("Ingredientt", IngredientSchema)

module.exports = IngredientSchema;