function AddListTodo() {
  return (
    <div className="container items-container">
      <div className="row kg-row">
        <div className="col-6">Buy Milk</div>
        <div className="col-4">4/2/2023 </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddListTodo;
