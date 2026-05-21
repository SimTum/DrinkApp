import express, { response } from 'express'
import mongoose from 'mongoose'
import Beverage from './models/beverage.model.js'
import Ingredient from './models/ingredient.model.js'
import Bevarage from './models/beverage.model.js'


const app = express()
app.use(express.json())

mongoose.connect('mongodb+srv://DrinkAdmin:wsM03rwEJiOF9Jc7@driknappdb.v1kngum.mongodb.net/Node-API?appName=DriknAppDB')
    .then(() => console.log("Sucessfullt connected to MongoDB"))
    .catch((err) => console.log("Connection failed", err)
    )

app.get('/', (req, res) => {
    res.send('Hello World, We use Nodemon')
})

app.get('/api/beverages', async (req, res) => {
    try {
        const bevarages = await Beverage.find({});
        res.status(200).json(bevarages);
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

app.listen(3000, () => {

    console.log("Hello, woof! We are at http://localhost:3000");

})



