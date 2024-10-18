function TodoItem({ todoName, todoDate }) {
  return (
    <div className="container flex flex-wrap space-justify-content-evenly">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
