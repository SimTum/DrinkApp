import mongoose from "mongoose";
import {IngredientSchema} from "./ingredient.model.js";

const BeverageSchema = new mongoose.Schema(
    {
        strDrink: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        strDrinkAlternate: {
            type: String,
            required: false,
            trim: true 
        },
        strTags: {
            type: String,
            required: false,
            trim: true
        },
        strVideo: {
            type: String,
            required: false,
            trim: true
        },
        strCategory: {
            type: String,
            required: false,
            trim: true
        },
        strIBA: {
            type: String,
            required: false,
            trim: true  
        },
        strAlcoholic: {
            type: Boolean,
            required: true,
            default : false
        },
        strGlass: {
            type: String,
            required: false,
            trim: true
        },
        strInstructions: {
            type: String,
            required: false,
            trim: true
        },
        strInstructionsES: {
            type: String,
            required: false,
            trim: true
        },
        strInstructionsDE: {
            type: String,
            required: false,
            trim: true
        },
        strInstructionsFR: {
            type: String,
            required: false,
            trim: true
        },
        strInstructionsIT: {
            type: String,
            required: false,
            trim: true
        },
        strInstructionsZH: {
            type: String,
            required: false,
            trim: true
        },
        strInstructionsZH: {
            type: String,
            required: false,
            trim: true
        },
        strDrinkThumb: {
            type: String,
            required: false,
            trim: true
        },
        ingredients: [{IngredientSchema, ingredientAmount : {
            type: String,
            required : true, 
            trim: true
        }}],
        strImageSource: {
            type: String,
            required: false,
            trim: true
        },
        strImageAttribution: {
            type: String,
            required: false,
            trim: true
        },
        strCreativeCommonsConfirmed: {
            type: String,
            required: false,
            trim: true
        },
        dateModified: {
            type: String,
            required: false,
            trim: true
        },
    },
    {
        timestamps: true
    }

);

const Bevarage = mongoose.model("Beverage", BeverageSchema)

export default Bevarage;