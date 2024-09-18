import { Person } from "./Person"

const PersonList = ({ persons, searchedPerson}) => {
    return (
        <>
            <ul>
                {
                    persons
                        .filter((person) => person.name.toLowerCase().includes(searchedPerson.toLowerCase()))
                        .map((person) => (
                            <Person key={person.name} name={person.name} number={person.number} />
                        ))
                }
            </ul>
        </>
    )
}

export { PersonList }