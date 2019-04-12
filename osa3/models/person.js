const mongoose = require('mongoose')
const url = require('./url')
if (process.env.MONGODB_URI){
    url = process.env.MONGODB_URI
}
mongoose.connect(url)

const Person = mongoose.model('Person', {
    name: String,
    number: String,
    date: Date
    
})

module.exports = Person