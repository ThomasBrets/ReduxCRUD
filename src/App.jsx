// Redux
import { useSelector } from "react-redux";

// Components
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

// react-router-dom
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex justify-center items-center h-full">
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/createTask" element={<TaskForm />} />
        <Route path="/editTask/:id" element={<TaskForm />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
