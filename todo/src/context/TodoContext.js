import { useContext, createContext } from "react";  // context file ek barr banate hai ye functality define karti hai fir aap chaye to 10 file mai bhi use kar sakte ho

export const TodoContext = createContext({
  todos: [     // array ke uber sare same datatype ke hoge agar obbject define hai to sare hi object hoge
    {       // ye object ek by default todo hai jisese ki todo khali nahi rahe
      id: 1,
      todo: "todo msg",
      completed: false,
    },  
  ],// ye propeties ho gayi todo ki ab ham funcaltites like ge
  // yaha par sirf naam define hota hai kaam components ya jaha use aar raha hai
  // ye argument array ke ander object ki values ke hogee bahar se bhi yahi  lenge
  // bahar jo bhi todo banage isi object me store hoge with same funcaltites
  addTodo: (todo) => {},
  updatedTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);  // whenever usecontext we talk the this  usecontext we give the a context ki konse context ke liye baat kaar raha hai
};

export const Todoprovider = TodoContext.Provider;  // dono kaam ham main file mai bhi kar sakate the
