require('dotenv').config()
import express, { response } from 'express'
import mongoose from 'mongoose'
import Beverage from './models/beverage.model.js'
import Ingredient from './models/ingredient.model.js'
import Bevarage from './models/beverage.model.js'


const app = express()
app.use(express.json())

const mongoUrl = process.env.MONGO_CONNECTION_STRING
 
mongoose.connect(mongoUrl)
    .then(() => console.log("Successful connected to MongoDB"))
    .catch((err) => console.log("Connection failed", err)
    )

app.get('/', (req, res) => {
    res.send('Hello World, We are testig if it is actually updating')
})

app.get('/api/beverages', async (req, res) => {
    try {
        const bevarages = await Beverage.find({});
        res.status(200).json(bevarages);
    } catch (error) {
        res.status(500).json({ message: error })
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




app.post('/api/beverage', async (req, res) => {
    try {
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
// INGREDIENTS
// INGREDIENTS
// INGREDIENTS
// INGREDIENTS
// INGREDIENTS
// INGREDIENTS
// INGREDIENTS
// INGREDIENTS
// INGREDIENTS
// INGREDIENTS
// INGREDIENTS
// INGREDIENTS
// INGREDIENTS
// INGREDIENTS
// INGREDIENTS

app.get('/api/ingredients', async (req,res) => {
    try {
        const ingredients = await Ingredient.find({})
        res.status(200).json(ingredients)
        
    } catch (error) {
        res.status(500).json({messag: error})
    }
})

app.

app.listen(3000, () => {
+
    console.log("Hello, woof! We are at http://localhost:3000");

})



