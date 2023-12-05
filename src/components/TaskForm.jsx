import React, { useState, useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Features
import { addTask, editTask } from "../features/tasks/taskSlice";

// uuid
import { v4 as uuid } from "uuid";

// react-router-dom
import { useNavigate, Link, useParams } from "react-router-dom";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const [titleForm, setTitleForm] = useState("Create your Task");

  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
      setTitleForm("Edit your Task");
    }
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-zinc-800 max-w-sm p-4 rounded-lg">
        <div className="flex flex-col items-center">
          <h1 className="text-[30px] text-yellow-400 p-4 rounded-lg uppercase">
            {titleForm}
          </h1>
          <Link to="/">
            <button className="bg-yellow-400 hover:bg-yellow-500 transition-all text-black h-[30px] w-[150px] rounded-lg mb-1">
              List
            </button>
          </Link>
        </div>
        <div>
          <form
            className="flex flex-col lg:mx-[500px] gap-2 text-black border border-yellow-400 rounded-md p-6 m-4"
            onSubmit={handleSubmit}
          >
            <h2 className="font-bold text-[16px] text-center text-yellow-400">
              Title
            </h2>
            <input
              name="title"
              type="text"
              placeholder="title"
              onChange={handleChange}
              value={task.title}
              className="rounded-md w-full p-2 bg-zinc-600"
            />

            <h2 className="font-bold text-[18px] text-center text-yellow-400">
              Description
            </h2>

            <textarea
              name="description"
              placeholder="description"
              onChange={handleChange}
              value={task.description}
              className="rounded-md p-2 bg-zinc-600"
            ></textarea>
            <button type="submit" className="btn bg-gray-400 rounded-lg mt-4">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
