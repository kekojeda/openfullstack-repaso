import { useEffect, useState } from "react";
import countriesService from "./services/countriesService";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchCountriesValue, setSearchCountriesValue] = useState('');

  useEffect(() => {
    countriesService.getAll().then((initialCountries) => {
      setCountries(initialCountries);
      console.log(initialCountries);
    });
  }, []);

  const handleFilter = (event) => {
      console.log(event.target.value);
      setSearchCountriesValue(event.target.value)
  }

  return (
    <>
      <h1>Countries</h1>

      <p>
        find countries <input onChange={handleFilter}/>
      </p>

      {

        countries.map((country) => (
          <li key={country.name.common}>
            {country.name.common}
          </li>
        ))
      }


    </>
  );
}

export default App;
