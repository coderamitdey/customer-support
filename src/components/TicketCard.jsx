import React from "react";

const TicketCard = ({ ticket, handleAddTask }) => {
  // Priority color classes
  const priorityColor = {
    High: "badge badge-error",
    Medium: "badge badge-warning",
    Low: "badge badge-success",
  };

  // Status color classes
  const statusColor = {
    "In Progress": "badge badge-info",
    Resolved: "badge badge-outline",
  };

  return (
    <div
      className="card bg-base-100 shadow-md hover:shadow-xl transition cursor-pointer"
      onClick={() => handleAddTask(ticket)}
    >
      <div className="card-body">
        {/* Title + Status */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="card-title text-lg md:text-xl">{ticket.title}</h2>
          <span className={statusColor[ticket.status]}>{ticket.status}</span>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base mb-2">{ticket.description}</p>

        {/* Customer */}
        <p className="text-sm">
          <strong>Customer:</strong> {ticket.customer}
        </p>

        {/* Priority */}
        <p className="text-sm">
          <strong>Priority:</strong>{" "}
          <span className={priorityColor[ticket.priority]}>
            {ticket.priority}
          </span>
        </p>

        {/* Created At */}
        <p className="text-sm">
          <strong>Created At:</strong> {ticket.createdAt}
        </p>
      </div>
    </div>
  );
};

export default TicketCard;
