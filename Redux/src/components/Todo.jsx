import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../Feature/todo/todoSlice";
function Todo() {
  const todos = useSelector((state) => state.todos); // yaha par state.todos ek array to todos bhi ek array ko stor ekare ga  // selector data laata hai  sstate ke roup me
  const dispatch = useDispatch(); // action ko dispatch karna padata hai
  return (
    <>
      <div>Todo</div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </li>
      ))}
    </> // yaha par paramete nahii bhej rehe hai kyuki vo callback managte hai par yaha hame callback nahi krnan hame too sirf button par click ho tab hi excute karne hai
  );
}

export default Todo;
