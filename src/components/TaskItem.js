import React from "react";

function TaskItem({ task, markTaskAsCompleted, removeTask }) {
  const handleMarkCompleted = () => {
    markTaskAsCompleted(task.id);
  };

  const handleRemoveTask = () => {
    removeTask(task.id);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleMarkCompleted}
        disabled={task.completed}
      />
      <span className={task.completed ? 'completed' : ''}>{task.title}</span>
      {!task.completed && (
        <button onClick={handleRemoveTask} disabled={task.completed}>
          Remove
        </button>
      )}
    </li>
  );
}


export default TaskItem;
