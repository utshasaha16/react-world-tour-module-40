import CountryData from "../countryData/CountryData";

const CountryDetails = (props) => {
    // const {country, handleVisitedCountries, handleCountriesFlags} = props
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            {/* <CountryData
                country={country}
                handleVisitedCountries={handleVisitedCountries}
                handleCountriesFlags={handleCountriesFlags}
            ></CountryData> */}
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetails;