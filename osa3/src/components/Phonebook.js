import React from 'react'

const Phonebook = ({persons,onc}) => {

    return(
        <div>
        <h2>Numerot</h2>
        <table stlye={{borderSpacing:"2px"}}>
        <tbody>
        {   persons.map(person => 
            <tr>
                <td>{person.name} </td>
                <td style={{marginRight:'2px'}}>{person.number} </td>
                <td> 
                    <button name={person.name} id ={person.id}
                        onClick={
                            onc
                        }
                    >
                    poista
                    </button>
                </td>
            </tr>
            )
        }
        </tbody>
        </table>
        </div>
    )
}
export default Phonebook