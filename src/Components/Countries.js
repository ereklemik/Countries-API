import { useState, useEffect } from "react";

const url = "https://restcountries.eu/rest/v2/all";

const Countries = () => {
  const [countries, setcountries] = useState([]);
  const fethCountriesData = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setcountries(countries);
  };
  useEffect(() => {
    fethCountriesData();
  }, []);

  return (
    <section className="grid">
      {countries.map((country) => {
        const { numericCode, name, population, region, capital, flag } =
          country;

        return (
          <article key={numericCode}>
            <div>
              <img src={flag} alt={name} />
              <div className="details">
                <h3 className="country-name">{name}</h3>
                <h4>Population: {population}</h4>
                <h4>Region: {region} </h4>
                <h4>Capital: {capital}</h4>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Countries;
