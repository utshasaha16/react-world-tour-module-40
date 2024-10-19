import { useState } from 'react';
import './country.css'
const Country = ({country, handleVisitedCountries, handleCountriesFlags}) => {
    
    const {name, flags, population, area, cca3,} = country;

    const [visited, setVisited] = useState([false])

    const handleVisited = () => {
        setVisited(!visited)
    }

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: visited ? 'black' : 'white'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p style={{color: visited ? 'black' : 'white'}}>Population: {population}</p>
            <p style={{color: visited ? 'black' : 'white'}}>Area: {area}</p>
            <p style={{color: visited ? 'black' : 'white'}}><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountries(country)}>Mark Visited</button>
            <br />
            <button onClick={() => handleCountriesFlags(country.flags.png)}>Add Flags</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited the country' : 'I want to visited'}
        </div>
    );
};

export default Country;