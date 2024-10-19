const CountryData = ({country}) => {
    return (
        <div>
            <p><small>Country Data: {country.name.official}</small></p>
        </div>
    );
};

export default CountryData;