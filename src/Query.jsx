import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

export default function Query() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const loadData = async () => {
    // if search query is empty, do not do anything
    if (!searchQuery) {
      return;
    }
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${searchQuery}`
    );

    const data = await response.json();
    setSearchResult(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        loadData={loadData}
      />
      <SearchResult searchResult={searchResult} />
    </>
  );
}
