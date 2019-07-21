const mongoose = require('mongoose');

const dogsSchema = new mongoose.Schema({
    name: String,
    breed: String,
    age: Number
})

const Dogs = mongoose.model('Dogs', dogsSchema);

//this shows what the export of this module is. which in this case it is the Dogs variable.
module.exports = Dogs;