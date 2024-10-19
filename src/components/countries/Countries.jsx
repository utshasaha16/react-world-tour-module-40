import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import "./countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedCountries, setVisitedCountries] = useState([]);

  const [countriesFlags, setCountriesFlags] = useState([])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = country => {
    console.log('added to this countries');
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries)
  }

  const handleCountriesFlags = flag => {
    const newCountriesFlags = [...countriesFlags, flag]
    setCountriesFlags(newCountriesFlags)
  }

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      {/* visited countries*/}
      <div>
        <h4>Visited Countries: {visitedCountries.length}</h4>
        <ul>
            {
                visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
            }
        </ul>
      </div>
      <div className="flags-container">
        {
            countriesFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
        }
      </div>
      {/* display countries */}
      <div className="country-container">
        {countries.map((country) => (
          <Country key={country.cca3} handleVisitedCountries={handleVisitedCountries} handleCountriesFlags={handleCountriesFlags} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
