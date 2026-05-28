import mongoose from "mongoose";
import Ingredient from "./ingredient.model.js";

const BeverageSchema = new mongoose.Schema(
    {
        strDrink: {
            type: String,
            required: true,
            trim: true
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
        Ingredient1: {
            type: String,
            required: true,
            default: "Water",
            trim: true

            
        },
        Ingredient2: {
            type: String,
            required: false,
            trim: true
        },
        Ingredient3: {
            type: String,
            required: false,
            trim: true
        },
        Ingredient4: {
            type: String,
            required: false,
            trim: true
        },
        Ingredient5: {
            type: String,
            required: false,
            trim: true
        },
        Ingredient6: {
            type: String,
            required: false,
            trim: true
        },
        Ingredient7: {
            type: String,
            required: false,
            trim: true
        },
        Ingredient8: {
            type: String,
            required: false,
            trim: true
        },
        Ingredient9: {
            type: String,
            required: false,
            trim: true
        },
        Ingredient10: {
            type: String,
            required: false,
            trim: true
        },
        Ingredient11: {
            type: String,
            required: false,
            trim: true
        },
        Ingredient12: {
            type: String,
            required: false,
            trim: true
        },
        Ingredient13: {
            type: String,
            required: false,
            trim: true
        },
        Ingredient14: {
            type: String,
            required: false,
            trim: true
        },
        Ingredient15: {
            type: String,
            required: false,
            trim: true
        },
        strMeasure1: {
            type: String,
            required: true,
            default: "1 cup",
            
        },
        strMeasure2: {
            type: String,
            required: false,
            trim: true
        },
        strMeasure3: {
            type: String,
            required: false,
            trim: true
        },
        strMeasure4: {
            type: String,
            required: false,
            trim: true
        },
        strMeasure5: {
            type: String,
            required: false,
            trim: true
        },
        strMeasure6: {
            type: String,
            required: false,
            trim: true
        },
        strMeasure7: {
            type: String,
            required: false,
            trim: true
        },
        strMeasure8: {
            type: String,
            required: false,
            trim: true
        },
        strMeasure9: {
            type: String,
            required: false,
            trim: true
        },
        strMeasure10: {
            type: String,
            required: false,
            trim: true
        },
        strMeasure11: {
            type: String,
            required: false,
            trim: true
        },
        strMeasure12: {
            type: String,
            required: false,
            trim: true
        },
        strMeasure13: {
            type: String,
            required: false,
            trim: true
        },
        strMeasure14: {
            type: String,
            required: false,
            trim: true
        },
        strMeasure15: {
            type: String,
            required: false,
            trim: true
        },
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