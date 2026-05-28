import mongoose from "mongoose";

const IngredientSchema = new mongoose.Schema(
    {
        strIngredient:
        {
            type: String,
            required: true,
            trim: true

        },
        strDescription:
        {
            type: String,
            required: false,
            trim: true
        },
        strType:
        {
            type: String,
            required: false,
            trim: true
        },
        strAlcohol:
        {
            type: Boolean,
            required: true,
            default: false,
            trim: true
        },
        strABV:
        {
            type: String,
            required: false,
            trim: true
        },

    },
    {
        timestamps: true
    }

);

const Ingredient = mongoose.model("Ingredient", IngredientSchema)


export default Ingredient;