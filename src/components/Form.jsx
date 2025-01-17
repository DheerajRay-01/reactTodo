import { useState } from "react";
import { useTodo } from "../context";

function Form() {
    
    const [todo ,setTodo] = useState("")
    const {addTodo} = useTodo()

    function add(e){
        e.preventDefault()
        if( !todo) return

        addTodo({todo, toggleComplete : false})
        setTodo('')
    }

    return (
        <form  className="flex"
        onSubmit={add}
        >
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={(e) => (setTodo(e.target.value))}
                value={todo}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default Form;

