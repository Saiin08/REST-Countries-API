export default function SearchResult({ searchResult }) {
  console.log("searchResult", searchResult);
  return (
    <div className="result">
      {searchResult.map((result) => {
        return (
          <div key={result.area} className="result_box">
            <img src={result.flags.png} alt="flag" />
            <p>{result.name.common}</p>
            <p className="population">Population:&nbsp;{result.population}</p>
            <p className="region">Region:&nbsp;{result.continents}</p>
            <p className="capital">Capital:&nbsp;{result.capital}</p>
          </div>
        );
      })}
    </div>
  );
}
