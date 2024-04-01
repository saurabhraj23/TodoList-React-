import { MdDeleteForever } from "react-icons/md";

function AddItems({ AddName, AddDate, handleDel }) {
  return (
    <div className="container items-container">
      <div className="row kg-row">
        <div className="col-6">{AddName}</div>
        <div className="col-4">{AddDate} </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={handleDel}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItems;
