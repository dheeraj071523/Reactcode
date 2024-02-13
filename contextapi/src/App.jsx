import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <h1>contextapi</h1>
      </UserContextProvider>
    </>
  );
}

export default App;
