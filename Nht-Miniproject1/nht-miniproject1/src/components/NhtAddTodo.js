
import { useState } from "react";

export default function NhtAddTodo({ dispatch }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === "") return;
        dispatch({ type: "ADD_TODO", payload: text });
        setText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Thêm công việc..." />
            <button type="submit">Thêm</button>
        </form>
    );
}
