import { useState, useEffect } from 'react'
import Filter from './components/filter'
import Form from './components/form'
import Persons from './components/persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  
  const [filteredPersons, setFilteredPersons] = useState([])

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

      if (filteredPersons.length == persons.length) {
        setFilteredPersons(filteredPersons.concat(person))
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

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
        setFilteredPersons(response.data)
    })
  }, [])

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