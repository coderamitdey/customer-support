import React from "react";
import Swal from "sweetalert2";

const TaskSidebar = ({ tasks, handleComplete }) => {
  return (
    <div className="border rounded-lg p-4 shadow bg-white">
      <h2 className="text-xl font-bold mb-4">Task Status</h2>
      {tasks.length === 0 ? (
        <p>No tasks added yet</p>
      ) : (
        tasks.map(task => (
          <div key={task.id} className="mb-3 border-b pb-2">
            <p className="font-semibold">{task.title}</p>
            <button
              className="btn btn-sm btn-success mt-2"
              onClick={() => handleComplete(task.id)}
            >
              Complete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskSidebar;
