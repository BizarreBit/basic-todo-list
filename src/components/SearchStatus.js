function SearchStatus({ setSearchStatus }) {
  const handleChange = (e) => {
      const value = e.target.value;
      setSearchStatus(!value ? value : value === "true");
    }
  return (
    <div className="btn-group ms-3">
      <input
        type="radio"
        name="status"
        id="all"
        value=""
        onChange={handleChange}
        className="btn-check"
        defaultChecked="true"
      />
      <label className="btn btn-outline-secondary rounded-0" htmlFor="all">
        <i className="fas fa-tasks" />
      </label>
      <input
        type="radio"
        name="status"
        id="done"
        value="true"
        onChange={handleChange}
        className="btn-check"
      />
      <label className="btn btn-outline-secondary rounded-0" htmlFor="done">
        <i className="fas fa-clipboard-check" />
      </label>
      <input
        type="radio"
        name="status"
        id="doing"
        value="false"
        onChange={handleChange}
        className="btn-check"
      />
      <label className="btn btn-outline-secondary rounded-0" htmlFor="doing">
        <i className="far fa-clipboard" />
      </label>
    </div>
  );
}

export default SearchStatus;
