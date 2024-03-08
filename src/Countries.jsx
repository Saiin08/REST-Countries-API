import "./Countries.css";

export default function Countries({ countries }) {
  return (
    <div className="countries_container">
      {countries.map((country) => {
        return (
          <div className="country" key={country.cioc}>
            <img src={country.flags.png} alt="flag" className="flag" />
            <h3 className="name">{country.name.common}</h3>
            <p className="population">Population:&nbsp;{country.population}</p>
            <p className="region">Region:&nbsp;{country.continents}</p>
            <p className="capital">Capital:&nbsp;{country.capital}</p>
          </div>
        );
      })}
    </div>
  );
}
