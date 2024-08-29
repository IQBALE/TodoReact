import { useState } from "react"
import style from './form.module.css'

export default function Form({ todos, setTodos }) {
    // const [todo, setTodo] = useState("");
    const [todo, setTodo] = useState({name: "", done:false});


    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({name: "", done:false});
    }

    return (
        <form className={style.todoForm} onSubmit={handleSubmit}>
            <div className={style.inputContaner}>
                <input className={style.todoInput} onChange={(e) => setTodo({name:e.target.value, done:false})} type="text" value={todo.name} placeholder="Enter Todo Item"></input>
                <button className={style.todoButton} type="submit">Add</button>
            </div>
        </form>
    );
}