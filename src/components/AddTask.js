function AddTask() {
  return (
    <div>
      <form>
        <div className="input-group">
          <input type="text" className={`form-control rounded-0`} />
          <button className="btn btn-success rounded-0">
            <i className="fas fa-plus" />
          </button>
          <div className="invalid-feedback">Error</div>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
