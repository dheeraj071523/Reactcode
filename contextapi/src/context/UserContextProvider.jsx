import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null); // React likhane se hame import karne i jarrurt nahi hai
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
// yaha Provider value me value pass kar rahe hai
// yaha par hamnne user ka store bana liya hai ya kahu ki context ka store bana liya hai
//Provider ek methid hai // return mai children props hai ab return hai to return karna padega isliye ham usestate le rahe hai
export default UserContextProvider;

//part 2
