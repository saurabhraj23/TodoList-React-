import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
// import AddListTodo from "./components/AddListTodo";
import "./App.css";
import AddItems from "./components/AddItems";
import { useState } from "react";

function App() {
  const [NameVal, setNameVal] = useState([]);
  const [DateVal, setDateVal] = useState([]);

  function handleFun(data) {
    let temp0 = [...NameVal, data[0]];
    setNameVal(temp0);
    let temp1 = [...DateVal, data[1]];
    setDateVal(temp1);
  }

  function handleDel(idx) {
    let t = [...NameVal];
    t.splice(idx, 1);
    let u = [...DateVal];
    u.splice(idx, 1);
    setNameVal(t);
    setDateVal(u);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo handleFun={handleFun} />
      {/* <AddListTodo /> */}
      {/* <AddItems AddName="Abcd" AddDate="24/08/2023" /> */}
      {NameVal.map((i, idx) => (
        <AddItems
          AddName={i}
          AddDate={DateVal[idx]}
          handleDel={() => handleDel(idx)}
        />
      ))}
    </center>
  );
}
export default App;
