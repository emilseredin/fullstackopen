import { useState } from 'react'
import Field from './field'

const Form = ({ persons, filteredPersons, setPersons, setFilteredPersons }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = event => setNewName(event.target.value)
    const handleNumberChange = event => setNewNumber(event.target.value)

    const addName = event => {
        event.preventDefault()
        const nameObject = {
          name: newName,
          number: newNumber
        }
        if (!nameObject.number) {
            alert('Please enter a phone number')
            return
        }
    
        if (persons.map(person => person.name).includes(newName)) {
          alert(`${newName} is already added to phonebook`)
          return
        }
        setPersons(persons.concat(nameObject))
        setFilteredPersons(filteredPersons.concat(nameObject))
        setNewName('')
        setNewNumber('')
    }

    return (
        <form onSubmit={addName}>
            <Field text={'name'} value={newName} onChange={handleNameChange}/>
            <Field text={'number'} value={newNumber} onChange={handleNumberChange}/>
            <div>
                <button type='submit'>add</button>
            </div>
        </form>
    )
}

export default Form