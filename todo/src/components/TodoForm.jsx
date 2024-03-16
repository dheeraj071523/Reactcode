import React, { useState } from "react";
import { useTodo } from "../context";

function TodoForm() {
  const [todo, setTodo] = useState(""); // individal todo ke liye
  const { addTodo } = useTodo(); //  context file mai usecontext ne usetodo ko sara context de diya tha ab use context ke pass sara context store hai
  // context se haam addTodo function manga rahe hai
  const add = (e) => {
    e.preventDefault();

    if (!todo) return;
    addTodo({ todo, completed: false }); // addtodo mai haam object pass akr rahe the isliye yaha bhi object ki form mai dena paadega na ki string ki
    setTodo(""); // id vaha par de diya tha to yaaha  par dene ki jarurat nnnahi hai
  };

  return (
    <>
      <form onSubmit={add} className="flex">
        <input
          type="text"
          placeholder="Write Todo..."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default TodoForm;
