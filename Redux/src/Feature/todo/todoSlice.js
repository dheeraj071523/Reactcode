import { createSlice, nanoid } from "@reduxjs/toolkit"; // nano id unique is generate karta hai

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

export const todoSlice = createSlice({
  // slice namm ke piche isliye lagate hai taki pata lage ki redux use kar rahe hai
  name: "todo", // ye bhi likhna padata hai
  initialState, // intial state create slice me likhna padata ha
  reducers: {
    // reducer bhi   // ye property hai  // isme property or function aate hai
    addTodo: (state, action) => {
      // addtodo ye ek property ha jisme ham function bhi define kar sakte hai // jo ki do argu lega
      const todo = {
        // ccontext mai function ki declartion nahi likhe the the par yaha likhte hai
        id: nanoid(), // dono argu yaad kaar lo ye rahe ga hi
        // state ka matlab jo abhi currrent hai vo mile gi
        // action ka matlab man le aga r ham todo deltee karna hai to vo id haame hawa mai nahi mile gi to us id ko lane ke liye ham action ka use karte hai
        text: action.payload, // payload ek object hai  usme bhi propety hai google par dekh sakte ho
      }; // todos ke array ke aander object save hoge todo ke jo aaye ge
      state.todos.push(todo); // intialstate ke ander jo array hai vo hi state hai // usko update kare ge iski madad se
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, text: newText } : todo
        ),
      };
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions; // reducer individal bhi export karne hoge

export default todoSlice.reducer; //or todoslice pura store bhi karna hoga
