import { useEffect, useState } from 'react'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { PersonList } from './components/PersonList'

import personService from './components/services/personService'
import { Notification } from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchedPerson, setSearchedPerson] = useState('')
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])



  const addPerson = (event) => {
    event.preventDefault()

    if (persons.find(el => el.name === newName && el.number === newNumber)) {
      alert(`${newName} is already added to phonebook, with the exact same number ${newNumber} `)

    } else if( persons.find(person => person.name === newName )){
      if(confirm(`${newName} is already added to phonebook with another number, replace de old number with a new one`)){
        const personFind = persons.find( person => person.name === newName)
        const personObject = {
          name: newName,
          number: newNumber
        }
        personService
          .update(personFind.id, personObject)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson  ))
            setNotification(`Se cambio el numero de ${returnedPerson.name} , numero antiguo ${personFind.number} por el numero nuevo ${returnedPerson.number} `)
            setTimeout(() => {
              setNotification(null)
            }, 3000)
          })
         
        console.log(`vas a cambiar el numero de una persona con id ${personFind.id}`);
      }

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
      <Notification message={notification} />
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