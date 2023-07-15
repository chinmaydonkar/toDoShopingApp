import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext';
import TaskItem from './TaskItem';

function TodoList() {
  const { tasks, addTask, markTaskAsCompleted, removeTask } = useContext(TodoContext);

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title: e.target.task.value,
      completed: false,
    };
    addTask(newTask);
    e.target.task.value = '';
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <form onSubmit={handleAddTask}>
        <input type="text" name="task" placeholder="Add a new task" required />
        <button type="submit">Add Task</button>
      </form>
      {tasks.length > 0 ? (
        <>
          <ul>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                markTaskAsCompleted={markTaskAsCompleted}
                removeTask={removeTask}
              />
            ))}
          </ul>
          <p>Total Tasks: {tasks.length}</p>
          <p>Completed Tasks: {tasks.filter((task) => task.completed).length}</p>
        </>
      ) : (
        <p>No tasks found.</p>
      )}
    </div>
  );
}


export default TodoList