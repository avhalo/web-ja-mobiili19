const mongoose = require('mongoose')
const url = require('./models/url')

mongoose.connect(url)

const Person = mongoose.model('Person', {
    name: String,
    number: String,
    date: Date
    
})

if (!process.argv[2]){
    Person
        .find({})
        .then(persons => {
            console.log("Puhelinluettelo:")
            persons.forEach(person =>{
                console.log(person.name + " " + person.number)
            })
            mongoose.connection.close()
        })


} else {
    const dbname = process.argv[2]
    const dbnumber = process.argv[3]


    const person = new Person({
        name: dbname,
        number: dbnumber,
        date: new Date()
    })
    console.log("Adding person "+dbname+ " "+ dbnumber + " to the directory")
    person
        .save()
        .then(response => {
            console.log("person saved")
            mongoose.connection.close()
        })

    }