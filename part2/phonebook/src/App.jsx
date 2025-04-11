import { useState } from 'react'
import Filter from './components/filter'
import Form from './components/form'
import Persons from './components/persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  
  const [filteredPersons, setFilteredPersons] = useState(persons)

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = event => setNewName(event.target.value)
  const handleNumberChange = event => setNewNumber(event.target.value)
  
  const handleSearch = event => {
    const chars = event.target.value

    setFilteredPersons(persons.filter(
      person => person.name.toLowerCase().includes(chars.toLowerCase())))
  }

  const addPerson = event => {
      event.preventDefault()
      if (!newNumber) {
          alert('Please enter a phone number')
          return
      }

      if (isPresent(newName)) {
        alert(`${newName} is already in the phonebook`)
        return
      }

      const person = {
        name: newName,
        number: newNumber
      }
      
      setPersons(persons.concat(person))
      
      setNewName('')
      setNewNumber('')
  }

  const isPresent = name => {
    if (persons.map(person => person.name).includes(name)) {
      return true
    }

    return false
  }

  return (
    <div>
      <h2>Phonebook</h2> 
      <Filter 
        handleSearch={handleSearch}/>
      <h3>Add a new</h3>
      <Form 
        addPerson={addPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}/>
      <h3>Numbers</h3>
      <Persons visiblePersons={filteredPersons}/>
    </div>
  )
}

export default App