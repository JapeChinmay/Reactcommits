import { useState, useEffect } from "react";
import TaskSetup from "../Task/TaskSetup";
import Add from "../AddTask/Add";
import "./Home.css";

const Home = () => {
  const [tasks, settasks] = useState(() => {
    const saved = localStorage.getItem("task-item");
    try {
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.log(e);

      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("task-item", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask) => {
    if (newTask.trim() == "") return;
    else {
      settasks((prevTasks) => [...prevTasks, newTask]);
    }
  };

  const handleDeleteTask = (indexToBeDeleted) => {
    settasks((prevTasks) => {
      return prevTasks.filter((element, index) => index != indexToBeDeleted);
    });
  };

  return (
    <div className="app-container">
      <Add onAdd={handleAddTask} />
      <div className="task-list">
        {tasks.map((task, index) => {
          return (
            <TaskSetup
              taskInput={task}
              key={index}
              onDelete={() => handleDeleteTask(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
