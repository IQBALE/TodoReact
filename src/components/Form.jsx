import { useState } from "react"
import style from './form.module.css'

export default function Form({ todos, setTodos }) {
    const [todo, setTodo] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo("");
    }

    return (
        <form className={style.todoForm} onSubmit={handleSubmit}>
            <input className={style.todoInput} onChange={(e) => setTodo(e.target.value)} type="text" value={todo} placeholder="Enter Todo Data"></input>
            <button type="submit">Add</button>
        </form>
    );
}