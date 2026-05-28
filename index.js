import 'dotenv/config'
import express, { response } from 'express'
import mongoose from 'mongoose'
import Beverage from './models/beverage.model.js'
import Ingredient from './models/ingredient.model.js'
import Bevarage from './models/beverage.model.js'


const app = express()
app.use(express.json())

const mongoUrl = process.env.MONGO_CONNECTION_STRING

await mongoose.connect(mongoUrl)
    .then(() => console.log("Successful connected to MongoDB"))
    .catch((err) => console.log("Connection failed", err)
    )




app.get('/api/debug', (req, res) => {
    res.json({ mongoUrl: process.env.MONGO_CONNECTION_STRING ? `set` : "not set" })
})

app.get('/', (req, res) => {
    res.send('Hello World, We are testig if it is actually updating')
})

app.get('/api/beverages', async (req, res) => {
    try {
        const bevarages = await Beverage.find({});
        res.status(200).json(bevarages);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.get('/api/beverage/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const bevarage = await Beverage.findById(id);
        res.status(200).json(bevarage);
    } catch (error) {
        res.status(500).json({ message: error })
    }
})


const mock = "test"


app.post('/api/beverage', async (req, res) => {
    try {
        const exists = await Beverage.findOne({ strDrink: req.body.strDrink })
        if (exists) {
            return res.status(409).json({ message: "Beverage already exists" })
        }
        console.log("ingredients in our request ", req.body.ingredients);

        await Promise.all(req.body.ingredients.map(async (ingredient) => {
            console.log("ingredients in our request (individual) ", ingredient.strIngredient);

            const ingredientExists = await Ingredient.findOne({ strIngredient: ingredient.strIngredient })
            if (!ingredientExists) {
                await Ingredient.create(ingredient)
                console.log('new Ingredient was created automatically', ingredient)
            }

        }))
        const beverage = await Beverage.create(req.body)
        res.status(200).json(beverage)

    } catch (error) {
        res.status(500).json({ message: error.message });
    }


});

app.put('api/beverage/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const beverage = await Bevarage.findByIdAndUpdate(id, req.body);
        if (!beverage) {
            return res.status(400).json({ message: "bebida não foi encontrada" })
        }

        const updBeverage = await Beverage.findById(id)
        res.status(200).json({ message: updBeverage });
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
})

app.delete('api/beverage/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const beverage = await Beverage.findByIdAndDelete(id);
        res.status(200)
    }
    catch (error) {
        res.status(500).json({ message: error })
    }
})

// INGREDIENTS


app.get('/api/ingredients', async (req, res) => {
    try {
        const ingredients = await Ingredient.find({})
        res.status(200).json(ingredients)
    } catch (error) {

        res.status(500).json({ message: error })
    }
})

app.get('/api/ingredient/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const ingredient = await Ingredient.findById(id)
        res.status(200).json(ingredient)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

app.post('/api/ingredient', async (req, res) => {
    try {
        const ingredient = await Ingredient.create(req.body)
        res.status(200).json(ingredient)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

app.put('/api/ingredient/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const ingredient = await Ingredient.findByIdAndUpdate(id, req.body)
        if (!ingredient) {
            return res.status(400).json({ message: "ingrediente não encontrado" })
        }
        const updIngredient = await Ingredient.findById(id)
        res.status(200).json(updIngredient)
    }
    catch (error) {
        res.status(500).json({ message: error })
    }
})

app.delete('/api/ingredient/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const ingredient = await Ingredient.findByIdAndDelete(id)
        res.status(200)
    }
    catch (error) {
        res.status(500).json({ message: error })
    }
})

app.listen(3000, () => {
    console.log("Hello, woof! We are at http://localhost:3000");

})



