import { useEffect, useState } from "react";
import Todo from "./Todo";

export default function Todos() {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodo(data));
    }, []);

    return (
        <div>
            <h3>Todos: {todo.length}</h3>
            {
                todo.map(t => <Todo key={t.id} todo={t} />)
            }
        </div>
    );
}
