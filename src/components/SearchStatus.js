function SearchStatus() {
  return (
    <div className="btn-group ms-3">
      <input
        type="radio"
        name="status"
        id="all"
        value=""
        className="btn-check"
        defaultChecked
      />
      <label className="btn btn-outline-secondary rounded-0" htmlFor="all">
        <i className="fas fa-tasks" />
      </label>
      <input
        type="radio"
        name="status"
        id="done"
        value="true"
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
        className="btn-check"
      />
      <label className="btn btn-outline-secondary rounded-0" htmlFor="doing">
        <i className="far fa-clipboard" />
      </label>
    </div>
  );
}

export default SearchStatus;
