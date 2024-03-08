export default function SearchBar({ searchQuery, setSearchQuery, loadData }) {
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleClick = () => {
    loadData();
  };

  return (
    <div className="search_bar">
      <input
        className="input"
        type="text"
        placeholder="🔍 search for a country"
        value={searchQuery}
        onChange={handleChange}
      />
      &nbsp;
      <button onClick={handleClick}>Search</button>
    </div>
  );
}
