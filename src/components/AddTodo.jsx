import { IoBagAddOutline } from "react-icons/io5";
function AddTodo({ handleFun }) {
  const today = new Date();
  const numberOfDaysToAdd = 1;
  const date = today.setDate(today.getDate() + numberOfDaysToAdd);
  const defaultValue = new Date(date).toISOString().substring(0, 10); //split("T")[0]; // yyyy-mm-dd

  return (
    <div className="container items-container">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" id="name" />
        </div>
        <div className="col-4">
          <input type="date" id="date" defaultValue={defaultValue} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={() => {
              let _name = document.getElementById("name").value;
              let _date = document.getElementById("date").value;
              let data = { name: _name, date: _date };
              handleFun(data);
            }}
          >
            <IoBagAddOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
