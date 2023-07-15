import React, { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const markTaskAsCompleted = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: true };
        }
        return task;
      })
    );
  };

  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <TodoContext.Provider
      value={{ tasks, addTask, markTaskAsCompleted, removeTask }}
    >
      {children}
    </TodoContext.Provider>
  );
};
