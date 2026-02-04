// const numbers = [1,2,3,4,5]

// const listItems = numbers.map((number) => <li>{number}</li>)

// function NumberList(){
//     return(
//         <ul>{listItems}</ul>
//     );
// }

export {NumberList};

const todos = [
    {id : 1, text : "Learn a project"},
    {id : 2, text : "Build a project"}
]

const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);

function Listtodos(){
    return(
        <ul>{todoItems}</ul>
    );
}

export {Listtodos};