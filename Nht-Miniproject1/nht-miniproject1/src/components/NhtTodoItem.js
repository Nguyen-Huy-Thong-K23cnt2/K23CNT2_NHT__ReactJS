export default function NhtTodoItem({ todo, dispatch }) {
    return (
        <li>
            <span onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                {todo.text}
            </span>
            <button onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}>Xóa</button>
        </li>
    );
}