const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(express.static('build'))
app.use(cors())


let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
  },
  {
    name: "Martti Tienari",
    number: "040-123456",
    id: 2
  },
  {
    name: "Arto Järvinen",
    number: "040-123456",
    id: 3
  },
  {
    name: "Lea Kutvonen",
    number: "040-123456",
    id: 4
  }
  ]
let baseURL = "/api/persons"
  
  //deprecated with express.static use (reason unknown):
  app.get('/', (req, res) => {
      res.send("<h1>Hello browser via express</h1>")
  })

  app.get(baseURL, (req,res) => {
      res.json(persons)
  })

  app.get(baseURL+'/:id', (req, res) => {
      const id = Number(req.params.id)
      const person = persons.find(person => person.id === id)
      person?res.json(person):res.status(404).end()
      res.json(person)
  })

  app.delete(baseURL+'/:id', (req,res) => {
      const id = Number(req.params.id)
      persons = persons.filter(note => note.id !== id)
      res.status(204).end()
  })

  //Tehtävissä pyydettiin tekemään Math.random:illa id
  //tämä on parempi tapa mutta sitä ei käytetä
  const generateId = () => {
    const maxId = persons.length > 0 ? persons.map(person => person.id).sort((a,b) =>  a- b).reverse()[0] : 1
    return maxId + 1
  }

  const generateIdRandom = () => {
    var gid = Math.random() * 65536
    if (persons.some(person => person.id === gid)){
         gid = generateIdRandom()
        return gid
    }
    return gid
  }

  app.post(baseURL, (req, res) =>{
      const body = req.body
      console.log(body.name)
      if (body.name === undefined) {
          res.status(400).json({error: "name missing"})
      }
      if (persons.find(person => person.name === body.name)){
          res.status(400).json({error: "name must be unique"})
      }

      const person = {
            name: body.name,
            number: body.number,
           // important: body.important ||false,
           // date: new Date(),
            id: generateIdRandom() //vaihtoehtoisesti generateId()
      }

      console.log(person)
      persons.concat(person)
      
      res.json(person)
  })

  const PORT =  process.env.PORT || 3001
  app.listen(PORT, () => {
      console.log('Server running on port '+ PORT)
  })