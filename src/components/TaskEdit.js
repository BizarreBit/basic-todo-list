function TaskEdit() {
  return (
    <form className="flex-grow-1">
      <div className="input-group">
        <input
          type="text"
          className={`form-control rounded-0`}
        ></input>
        <button className="btn btn-primary rounded-0">
          <i className="far fa-edit" />
        </button>
        <button type="button" className="btn btn-danger rounded-0">
          <i className="fa fa-times" />
        </button>
        <div className="invalid-feedback">Error</div>
      </div>
    </form>
  );
}

export default TaskEdit;
