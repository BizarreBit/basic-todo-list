function SearchText({ searchText, setSearchText }) {
  const handleChange = (e) => setSearchText(e.target.value);

  return (
    <div className="input-group">
      <input
        type="text"
        value={searchText}
        onChange={handleChange}
        className="form-control rounded-0"
      />
      <button
        onClick={() => setSearchText("")}
        className="btn btn-secondary rounded-0"
      >
        <i className="fas fa-times" />
      </button>
    </div>
  );
}

export default SearchText;
