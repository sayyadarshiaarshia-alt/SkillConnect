import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  const student = localStorage.getItem("student");

  if (student) {
    return <Dashboard student={JSON.parse(student)} />;
  }

  return <Login />;
}

export default App;