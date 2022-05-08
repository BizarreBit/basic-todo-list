import TaskEdit from "./TaskEdit";

function TaskItem() {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center py-3 bd-callout bd-callout-success`}
    >
      <TaskEdit />
      <>
        <span>Title</span>
        <div className="btn-group">
          <button className="btn btn-info rounded-0">
            <i className={`fas fa-toggle-on`} />
          </button>
          <button className="btn btn-danger rounded-0">
            <i className="far fa-trash-alt" />
          </button>
        </div>
      </>
    </li>
  );
}

export default TaskItem;
