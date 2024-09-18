import { useEffect, useState } from 'react'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { PersonList } from './components/PersonList'

import personService from './components/services/personService'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchedPerson, setSearchedPerson] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })


  }, [])



  const addPerson = (event) => {
    event.preventDefault()

    if (persons.find(el => el.name === newName)) {
      alert(`${newName} is already added to phonebook`)

    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }

      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
        })
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value)
  }

  const handleFilteredPersons = (event) => {
    console.log(event.target.value);
    setSearchedPerson(event.target.value)
  }

  const handleDelete = (id, name) => {
    if (confirm(`Delete ${name}?`)) {
      personService
        .deletePerson(id)
        .then(deletedPerson => {
          setPersons(persons.filter(person => person.id != deletedPerson.id))
        }
        )
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchedPerson={searchedPerson} handleFilteredPersons={handleFilteredPersons} />

      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />


      <h2>Numbers</h2>
      <PersonList
        persons={persons}
        searchedPerson={searchedPerson}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default App