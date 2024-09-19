import { useEffect, useState } from "react";
import countriesService from "./services/countriesService";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchedCountries, setSearchedCountries] = useState([])
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
      setSearchedCountries(countries.filter((country) => country.name.common.toLowerCase().includes(searchCountriesValue.toLowerCase())))
      
  }

  return (
    <>
      <h1>Countries</h1>

      <p>
        find countries <input onChange={handleFilter}/>
      </p>
      {
        searchedCountries.length > 10 
        ?
        <p>Hay demasiados resultados, intenten una busqueda mas espesifica</p>
        :
        searchedCountries.map((country) => (
          
          <li key={country.name.common}>
            {country.name.common}
          </li>
        ))
      }

   


    </>
  );
}

export default App;
