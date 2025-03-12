import { useReducer, useEffect } from "react";
import { NhtTodoReducer } from "../reducers/NhtTodoReducer";
import NhtTodoItem from "./NhtTodoItem";
import NhtAddTodo from "./NhtAddTodo";

export default function NhtTodoList() {
    const [todos, dispatch] = useReducer(NhtTodoReducer, [], () => {
        const localData = localStorage.getItem("todos");
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div>
            <h2>Danh Sách Công Việc</h2>
            <NhtAddTodo dispatch={dispatch} />
            <ul>
                {todos.map((todo) => (
                    <NhtTodoItem key={todo.id} todo={todo} dispatch={dispatch} />
                ))}
            </ul>
        </div>
    );
}