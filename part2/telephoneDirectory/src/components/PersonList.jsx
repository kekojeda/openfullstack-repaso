import { Person } from "./Person"

const PersonList = ({ persons, searchedPerson, handleDelete}) => {
    return (
        <>
            <ul>
                {
                    persons
                        .filter((person) => person.name.toLowerCase().includes(searchedPerson.toLowerCase()))
                        .map((person) => (
                            <Person key={person.name} name={person.name} number={person.number} handleDelete={()=>handleDelete(person.id, person.name)} />
                        ))
                }
            </ul>
        </>
    )
}

export { PersonList }