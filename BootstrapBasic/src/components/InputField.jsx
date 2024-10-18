function InputField() {
  return (
    <div className="row">
      <div className="col-6">
        <input type="text" placeholder="Enter your task"></input>
      </div>
      <div className="col-4">
        <input type="date"></input>
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success px-4 py-2">
          Add
        </button>
      </div>
    </div>
  );
}

export default InputField;
