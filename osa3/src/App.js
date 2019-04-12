import React, {Component} from 'react'
import personService from './services/persons'
import Phonebook from './components/Phonebook'
import Add from './components/Add'


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            persons: [
                {name: 'Arto Hellas',
                number:'not_specified',
                id: 0
                }
            ],
            newName: '',
            newNumber: ''
        }
    }
    componentDidMount(){
        personService
        .getAll()
        .then(persons => {
            this.setState({persons})
        })
    }
    removePerson = (event) => {
        const id = event.target.getAttribute("id");
        const name = event.target.getAttribute("name");
        if (window.confirm("Delete " + name + "?")) {
          personService
            .remove(id)
            .then(person => {
              this.setState({
                persons:
                  this.state.persons.filter(person => person.id.toString() !== id)
                });
              
              })
            .catch(error => {
              console.log("couldn't remove")
              personService
                .getAll()
                .then(persons => this.setState({
                  persons: persons,
                  newName: '',
                  newNumber: ''
                }));
            });
        };
      };
    addPerson = (event) => {
        event.preventDefault()
        if(!this.state.persons.some(person => person.name === this.state.newName)){
            const personObj = {
                    name:this.state.newName,
                    number:this.state.newNumber
                }
            personService
                .create(personObj)
                .then(newPerson =>{
                 this.setState({
                    persons: this.state.persons.concat(newPerson),
                    newName: '',
                    newNumber: ''
                  })
                })
     } else {
         alert("Nimi "+ this.state.newName+ " jo luettelossa")
     }
    }
    handleNameChange = (event) => {
        this.setState({newName: event.target.value})
    }
    handleNumChange = (event) => {
        this.setState({newNumber: event.target.value})
    }

    render(){
        return(
         <div>
            <h2>Puhelinluettelo</h2>
            <Add
                submit={this.addPerson}
                namechange={this.handleNameChange}
                numchange={this.handleNumChange}
                nameval={this.state.newName}
                numval={this.state.newNumber}
            />
            <Phonebook 
                persons={this.state.persons}
                onc={this.removePerson}
            />
        </div>
        )
    }
}
export default App