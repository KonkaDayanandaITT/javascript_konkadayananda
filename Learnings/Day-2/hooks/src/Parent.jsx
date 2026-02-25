import Child from "./Child";

function Parent(){
    const handleClick = () =>{
        alert('Button clicked from Child');
    }

    return <Child onClick = {handleClick} />
}

export default Parent;