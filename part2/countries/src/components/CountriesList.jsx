const CountriesList = ({ searchedCountries, handleShowClick }) => {
  return (
    <>
      {searchedCountries.map((country) => (
        <li key={country.name.common}>
            {country.name.common}
            <button onClick={()=>handleShowClick(country.name.common)}>show</button>
        </li>
      ))}
    </>
  );
};

export { CountriesList };
