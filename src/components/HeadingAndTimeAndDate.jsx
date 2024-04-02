export let HeadingAndTimeAndDate=()=>{
    let date=new Date();
return (<>
    <h1 className="heading">ToDo App</h1>
    <p className="time">{date.toLocaleTimeString()}</p>
    <p className="date">{date.toLocaleDateString() }</p>
    </>
);
}