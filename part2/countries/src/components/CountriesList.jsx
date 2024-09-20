const CountriesList = ({ searchedCountries,showCountry }) => {
  return (
    <>
      {searchedCountries.map((country) => (
        <li key={country.name.common}>
            {country.name.common}
            <button onClick={showCountry}>show</button>
        </li>
      ))}
    </>
  );
};

export { CountriesList };
