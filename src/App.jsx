import { HeadingAndTimeAndDate } from "./components/HeadingAndTimeAndDate";
import { FormData } from "./components/FormData";
import { useState } from "react";
import "./App.css";

function App(){
let [DataVal,setDataVal]=useState([]);

  function handleData(name,date){
    if(name.length!==0){
      if(!DataVal.some((obj)=>(obj.name===name && obj.date===date))){
    let temp=[...DataVal,{name:name,date:date}];
    setDataVal(temp);
      }else{
alert("Already Exists");
      }
    }else{
alert("Input is Empty");
    }

  }

  function handleDelete(idx){
    let temp=[...DataVal];
    temp.splice(idx,1);
    setDataVal(temp);
        }
return (
<div className="main-div">
  <div className="card-div">
<HeadingAndTimeAndDate/>
<FormData handleData={handleData} />
{DataVal.map((item,idx)=>(< div className="itemDiv" key={idx}>
  <h1 className="itemText">{item.name}</h1>
  <h1 className="itemDate">{item.date}</h1>
  <button className="delButton" onClick={()=>handleDelete(idx)} >Delete</button>
  </div>
))}
</div>
</div>
  );
}

export default App;