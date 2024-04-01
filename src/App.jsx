import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
// import AddListTodo from "./components/AddListTodo";
import "./App.css";
import AddItems from "./components/AddItems";
import { useState } from "react";
import { Welcome } from "./components/Welcome";

function App() {
  const [DataVal, setDataVal] = useState([]);
  function handleFun(data) {
    let temp = [];
    console.log(DataVal);
    data.name.length !== 0
      ? !DataVal.some((obj) => obj.name === data.name && obj.date === data.date)
        ? ((temp = [...DataVal, data]), setDataVal(temp))
        : alert("Same data is already present")
      : alert("Input is blank");
  }

  function handleDel(idx) {
    let del = [...DataVal];
    del.splice(idx, 1);
    setDataVal(del);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo handleFun={handleFun} />
      {/* <AddListTodo /> */}
      {/* <AddItems AddName="Abcd" AddDate="24/08/2023" /> */}
      {DataVal.length === 0 ? <Welcome /> : null}
      {DataVal.map((i, idx) => (
        <AddItems
          key={idx}
          AddName={i.name}
          AddDate={i.date}
          handleDel={() => handleDel(idx)}
        />
      ))}
    </center>
  );
}
export default App;
