import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
}); // to bascially  yaha par ham ek themcontext nam ka katith store bana rahe hai jiska structure ek object ko rakhta hai
// yaha par ham ek value lete ha or default vallue bhi lete hai taki app crash na ho
// or do function bhi lete hai jab bhi koi context(store) call karega ye sab  milnge
// yaha par ham state bhi pass kar sakte hai

export const ThemeProvider = ThemeContext.Provider; // ye hamara code bacha raha hai

export default function useTheme() {
  // ye ek custom  hook hai
  return useContext(ThemeContext); // ye hamara code bacha  raha hai
}
// do file ka kaam ek me
