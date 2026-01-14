import React from "react";

const TaskSidebar = ({ tasks, resolvedTasks, handleComplete }) => {
  return (
    <div className="w-full md:w-96 space-y-6 shadow-md card card-border p-4 rounded">
      <div>
        <h2 className="text-2xl font-bold mb-3">Task Status</h2>

        {tasks.length === 0 && <p>No tasks yet</p>}

        {tasks.map((task) => (
          <div
            key={task.id}
            className="p-3 card card-border shadow-md rounded mb-3"
          >
            <p className="font-bold mb-2">{task.title}</p>
            <button
              className="btn btn-sm w-full btn-primary"
              onClick={() => handleComplete(task)}
            >
              Complete
            </button>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-3">Resolved Tasks</h2>

        {resolvedTasks.length === 0 && <p>No resolved tasks</p>}

        {resolvedTasks.map((task) => (
          <div key={task.id} className="p-3 card card-border shadow-md rounded mb-2 text-gray-600">
            {task.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskSidebar;
