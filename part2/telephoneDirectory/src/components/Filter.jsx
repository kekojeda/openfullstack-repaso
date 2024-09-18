const Filter = ({searchedPerson,handleFilteredPersons}) => {
    return (
        <>
            <p>
                Filter shown with <input value={searchedPerson} onChange={handleFilteredPersons} />
            </p>
        </>
    )
}

export { Filter }