function AddTodo({ handleFun }) {
  return (
    <div className="container items-container">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" id="name" />
        </div>
        <div className="col-4">
          <input type="date" id="date" />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={() => {
              let _name = document.getElementById("name").value;
              let _date = document.getElementById("date").value;
              let data = [_name, _date];
              handleFun(data);
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
