import React from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";

// Features
import { deleteTask } from "../features/tasks/taskSlice";

// react-router-dom
import { useNavigate, Link } from "react-router-dom";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  // console.log("TASKS", tasks);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-[80%]">
      <header className="flex flex-col justify-center items-center py-4">
        <h1 className="text-[30px] text-yellow-400 hover:text-zinc-900 hover:bg-yellow-400 transition p-4 border border-yellow-400 rounded-lg uppercase">Tasks {tasks.length}</h1>
        <Link to="/createTask">
          <button className="bg-yellow-400 hover:bg-yellow-500 transition text-black h-[30px] w-[150px] rounded-lg m-4">
            Create
          </button>
        </Link>
      </header>

      {/* grid */}
      <div className="grid grid-cols-3 gap-4">
        {tasks.map((task) => (
          <div key={task.id}>
            <div className="flex justify-center space-x-4 items-center bg-zinc-800 rounded-lg p-6">
              <div>
                <h3 className="font-semibold">{task.title}</h3>
                <p>{task.description}</p>
              </div>
              <div className="flex gap-2">
                <button
                  className="btn bg-red-600 hover:bg-red-500 p-2 rounded-lg text-white"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
                <Link to={`/editTask/${task.id}`}>
                  <button className="btn bg-green-600 hover:bg-green-500 p-2 rounded-lg text-white">
                    Edit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
