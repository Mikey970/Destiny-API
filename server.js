//make and import express and mongoose
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Destiny', {useNewUrlParser: true})
let destinyData = require('./test.json')

//create the model for the data
let Destiny = mongoose.model('Destiny', mongoose.Schema({
  
  gun_name: String,
  gun_archetype: String,
  Source: String,
  'Element ': String,
  gun_RoF: Number,
  rarity: String,
  weapon_type: String



}))
//delete old files and seed database
Destiny.deleteMany({})
  .then(() => Destiny.create(destinyData))
  .then(() => {
    console.log("Inserted DB")
  })


//set app to listen
let server = app.listen(9000, () => console.log("server started"))
server.on('listening', () => console.log("Listening on port 9000 "))
server.on('error', error => console.error("you messed up", error))

app.use(express.json())
//findAll
app.get('/Destiny', (request, response) => {
  
  Destiny
    .find()
  .then(result=> response.json(result))
})
//Create Weapon
app.post('/Destiny', (request, response)=> {
 
  Destiny
    .create(request.body)
    .then(data=> response.json(data)) 
})

//update
app.put('/Destiny/:id', (request, response)=> {
  let itemId = request.params.id
  let newItemData = request.body

  Destiny
    .findByIdAndUpdate(itemId, newItemData, { new: true })
    .then(updatedItem=> response.json(updatedItem))
})
//find by id
app.get('/Destiny/:id', (request, response) => {
  let weaponId = request.params.id;
  Destiny
    .findById(weaponId)
  .then(data=> response.json(data))
})

//destroy it 
app.delete('/Destiny/:id', (request, response)=> {
  let weaponId = request.params.id
  Destiny
    .findByIdAndRemove(weaponId)
    .then(()=> response.json({success: true}))
})
