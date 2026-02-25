import React from "react";
const TodoButton = React.memo(({addTodo}) =>{
    console.log("child Rendered");
    return <button onClick={addTodo}>Add Todo</button>
})

export default TodoButton;