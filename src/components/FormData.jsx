import { useRef } from "react";

export let FormData=({handleData})=>{
    let currentData=useRef();
    
    let date=new Date();
    let year=date.toLocaleString("default",{year:"numeric"});
    let month=date.toLocaleString("default",{month:"2-digit"});
    let day=date.toLocaleString("default",{day:"2-digit"});
    let formattedDate=year+"-"+month+"-"+day;

    function handleSubmit(event){
handleData(currentData.current[0].value,currentData.current[1].value);
event.preventDefault();

    }

return (<>
<form className="form" action="" onSubmit={handleSubmit} ref={currentData}>
<input className="inputText" type="text" placeholder="Enter ToDo here"/>
<input className="inputDate" type="date" defaultValue={formattedDate}/>
<button className="addButton" type="Submit">Add</button>

</form>
    </>
);
}