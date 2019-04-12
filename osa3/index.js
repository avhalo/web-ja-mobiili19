const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Person = require('./models/Person')
const app = express()
app.use(bodyParser.json())
app.use(express.static('build'))
app.use(cors())


const formatPerson = (note) => {
  return {
    name:note.name,
    number: note.number,
    id: note._id
  }
}

let baseURL = "/api/persons"
  
  //deprecated with express.static use (reason unknown):
  app.get('/', (req, res) => {
      res.send("<h1>Hello browser via express</h1>")
  })

  app.get(baseURL, (req,res) => {
    Person
      .find({})
      .then(persons => {
        res.json(persons.map(formatPerson))
      })  
    //res.json(persons)
    console.log(process.env.NODE_ENV)
  })

  app.get(baseURL+'/:id', (req, res) => {
      const id = req.params.id
        Person
          .findById(id)
          .then(foundPerson => {
            if (foundPerson){
              res.json(formatPerson(foundPerson))
            } 
            else {
              res.status(404).end()
            }
          })
          .catch(error => {
            console.log(error)
            res.status('400').send({error: "malformatted id"})
          })
  })

  app.delete(baseURL+'/:id', (req,res) => {
      const id = req.params.id
      Person
        .findByIdAndRemove(id)
        .then(result => {
          res.status(204).end()
        })
        .catch(error => {
          res.status(400).send({error: "malformatted id"})
        })
  })


  app.post(baseURL, (req, res) =>{
      const body = req.body
      if (body.name === undefined) {
          res.status(400).json({error: "name missing"})
      }
     
     /*
      Person 
      .find(person => {
        if (person.name === body.name){
          res.status(400).json({error: "name must be unique"})
        }
      }) 
      */
      

      const person = new Person( {
            name: body.name,
            number: body.number,
           date: new Date()
      })

      console.log(person)
      person
        .save()
        .then(savedPerson => {
          res.json(formatPerson(savedPerson))
        })      
  })

  const PORT =  process.env.PORT || 3001
  app.listen(PORT, () => {
      console.log('Server running on port '+ PORT)
  })