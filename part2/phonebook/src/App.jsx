import { useState } from 'react'
import Filter from './components/filter'
import Form from './components/form'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  
  const [filteredPersons, setFilteredPersons] = useState(persons)

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter 
        persons={persons}
        setFilteredPersons={setFilteredPersons}/>
      <h3>Add a new</h3>
      <Form 
        persons={persons}
        filteredPersons={filteredPersons}
        setPersons={setPersons}
        setFilteredPersons={setFilteredPersons}/>
      <h3>Numbers</h3>
      <div>
        {filteredPersons.map((person, index) => 
          <p key={index + 1}>{person.name} {person.number}</p>)}
      </div>
    </div>
  )
}

export default App