import { useEffect, useState } from "react";
import countriesService from "./services/countriesService";
import { CountriesList } from "./components/countriesList";
import { CountryDetail } from "./components/CountryDetail";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchedCountries, setSearchedCountries] = useState([]);
  const [searchCountriesValue, setSearchCountriesValue] = useState("");

  useEffect(() => {
    countriesService.getAll().then((initialCountries) => {
      setCountries(initialCountries);
    });
  }, []);

  const handleFilter = (event) => {
    const filterValue = event.target.value;
    setSearchCountriesValue(filterValue);

    setSearchedCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(filterValue.toLowerCase())
      )
    );
  };

  const handleShowClick = (countryName) => {
    console.log("cliked");
    console.log(countryName);
    const showCountry = searchedCountries.filter(
      (el) => el.name.common === countryName
    );
    console.log(showCountry);
    setSearchedCountries(showCountry);
  };

  return (
    <>
      <h1>Countries</h1>

      <p>
        find countries{" "}
        <input value={searchCountriesValue} onChange={handleFilter} />
      </p>

      {searchedCountries.length > 10 && (
        <p>Too many results, please refine your search</p>
      )}

      {searchedCountries.length > 1 && searchedCountries.length <= 10 && (
        <CountriesList searchedCountries={searchedCountries} handleShowClick={handleShowClick} />
      )}

      {searchedCountries.length === 1 && (
        <CountryDetail searchedCountries={searchedCountries}/>
      )}
    </>
  );
}

export default App;
