const CountryDetail = ({searchedCountries}) => {

    const country = searchedCountries[0]
    const languages = country.languages
    console.log(country);
    console.log(languages);
    
    
    return (
        <>
        <h2>{country.name.official}</h2>

        <p>Capital:{country.capital}</p>
        <p>Area: {country.area}</p>

        <h3>Languages</h3>
        {
          Object.entries(country.languages).map(([code, name]) => (
            <li key={code}>{name}</li>
          ))
        }

        <img src={country.flags.png} alt={country.flags.alt} />
        </>
    )
}

export { CountryDetail }