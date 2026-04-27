import express from 'express'
import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://DrinkAdmin:wsM03rwEJiOF9Jc7@driknappdb.v1kngum.mongodb.net/Node-API?appName=DriknAppDB')
    .then(() => console.log("Sucessfullt connected to MongoDB"))
    .catch((err) => console.log("Connection failed", err)
    )


const app = express()

app.get('/', (req, res) => {
  res.send('Hello World, We use Nodemon')
})
app.listen(3000, () => {

    console.log("Hello, woof! We are at port 3000");

})



