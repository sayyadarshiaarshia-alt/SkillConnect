import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  const savedStudent = localStorage.getItem("student");

  if (savedStudent) {
    try {
      const student = JSON.parse(savedStudent);
      return <Dashboard student={student} />;
    } catch (error) {
      console.error("Invalid student data:", error);
      localStorage.removeItem("student");
    }
  }

  return <Login />;
}

export default App;