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
        <CountriesList searchedCountries={searchedCountries} />
      )}

      {searchedCountries.length === 1 && (
        <CountryDetail searchedCountries={searchedCountries}/>
      )}
    </>
  );
}

export default App;
