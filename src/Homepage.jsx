import { useEffect } from "react";
import { useState } from "react";
import Countries from "./Countries";

export default function Homepage() {
  const [countries, setCountries] = useState([]);

  const loadCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
    // console.log(data);
  };

  useEffect(() => {
    loadCountries();
  }, []);

  return (
    <>
      <Countries countries={countries} />
    </>
  );
}
