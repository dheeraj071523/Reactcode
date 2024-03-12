import React, { useContext } from "react";
import UserContext from "../context/UserContext";

// profile me ham usercontext se data le rahe hai jo ki login se save hua tha
// yaha par ham usercontext ke user varaiable ka use kar rahe hai jo ki store ka access dega

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>please Login</div>;

  return <div>Welcome {user.username}</div>;
}

export default Profile;
