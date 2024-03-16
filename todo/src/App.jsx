import { useEffect, useState } from "react";
import "./App.css";
import { Todoprovider } from "./context";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]); // todo jo aaye ge unko yaha save kare ge temporary

  const addTodo = (todo) => {
    // id unique hai isliye date // ...todo kyuki context ke store mai array ke ander ek object hai  jiske ande tin value hai i=ek is and bakki ...todo se mil jaye gi ye bhi apne aap mai ek  object hai
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]); //prev ka matlab hai purani array value delete nahi hogi ham prev me vo store kar lege ye ek argu hai agar ham settodos(todos) kate to sari value selete ho jati array ki yaha par ham purni jitni bhi hai isliye ...prev lagaya hai vo or nayi value array ke ander store kara rahe hai context ke stoore mai
  };

  const updatedTodo = (id, todo) => {
    setTodos(
      (
        prev // map har ek todo ke ppass jaye ga ya arraay ke har object ke pass // jaha par id match hoti hai usme todo change ho jaye ga
      ) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)) // agar prevtodo ki id aani wali id se match hoti hai  naya todo save ho jaye ja us id ke sath nahi to nahi hoga
    );
  };
  const deleteTodo = (id) => {
    // filter ek naya array banys ga  context mai jo delte todo ki is se jo match nahi kare ga vo naye array mai add ho jaye ga or jo ho gaya vo add nahi hoga kyuki filter true statement par hi work karta hai
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id //! iska matlab previous value override ho jati hai
          ? { ...prevTodo, completed: !prevTodo.completed } // jaha par id match ho jati to object mai sab pervious value rakho bad completed ko override kar do agar true hai to false kar do or false hai to true  kar do
          : prevTodo
      )
    );
  };

  //jab bhi hamari application load hoti hai to useeffect run hota hai
  // ye jaye ga or local storage se query kare ga jo bhi value pahale se bani hui hai ya store hai unko laye gaa
  // to useeffect refrs ya load hone par pahale run hota hai
  // getitem method localstorage se value deta hai
  useEffect(() => {
    // yaha par local storage ka use kar rahe hai
    // react view etc mai javascript ke local storage hote hai kyuki vo javscipt ke localstorage hai
    // kai barr localstorage mai dat string ki format mai save hota hai
    // to usko json mai badlan padta hai
    const todos = JSON.parse(localStorage.getItem("todos")); // todos key ka naam hai koi bhi ho sakta hai namm

    if (todos && todos.length > 0) {
      // json ka mtlab object hi nahi hai ye array bhi ho sakta hai
      setTodos(todos);
    }
  }, []); // yaha par ham dependices bhi rakh sakte the // agar usme change aata hai to useeffect eun ho jaye ga sat sat mai change ke
  // useeeffect multiple use kar sakte hai
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // set msi key or value deni padati hai
  }, [todos]); // yaha par todos dependices hai jese hi iske ander change aaye ga uper ye run ho jaye ga

  return (
    <Todoprovider // todo provider means provide karna jo context ya store se ye value provide karta hai
      value={{ todos, addTodo, updatedTodo, deleteTodo, toggleComplete }} // double curly bracket isliye laga rahe hai kyuki destructting ke liye ab hame Todocontext.value likhane ki jarurt nahi hogi ab ham direct hi value likh dege
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
            {todos.map(
              (
                todo // auto return hai ()  or  {} apan ko return karna padta hai
              ) => (
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo} />
                </div>
              )
            )}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </Todoprovider>
  );
}

export default App;
