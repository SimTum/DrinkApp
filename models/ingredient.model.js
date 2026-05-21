import mongoose from "mongoose";

const IngredientSchema = new mongoose.Schema(
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
            type: Boolean,
            required: true,
            default: false
        },
        strABV:
        {
            type: String,
            required: false
        },

    },
    {
        timestamps: true
    }

);

const Ingredient = mongoose.model("Ingredient", IngredientSchema)


export default Ingredient;