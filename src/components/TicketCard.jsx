import { Calendar } from "lucide-react";
import React from "react";

const TicketCard = ({ ticket, onClick }) => {
  return (
    <div
      className="p-4 card card-border shadow-md rounded cursor-pointer hover:bg-gray-100"
      onClick={() => onClick(ticket)}
    >
      <div className="flex justify-between items-center mb-2">
        <p className="font-bold">{ticket.title}</p>

        <span
          className={`px-2 py-1 text-xs rounded ${
            ticket.status === "In Progress"
              ? "bg-yellow-200 text-yellow-700"
              : "bg-green-200 text-green-700"
          }`}
        >
          {ticket.status || "Open"}
        </span>
      </div>

      <p className="text-gray-500">{ticket.description}</p>

      <div className="flex justify-between text-sm mt-3">
        <div className="flex gap-2">
          <span>#{ticket.id}</span>
          <span
            className={`${
              ticket.priority === "High"
                ? "text-red-600"
                : ticket.priority === "Medium"
                ? "text-yellow-500"
                : "text-green-600"
            }`}
          >
            {ticket.priority}
          </span>
        </div>

        <div className="font-semibold">
          {ticket.customer}
        </div>

        <div className="flex items-center gap-1">
          <Calendar size={14} />
          {ticket.createdAt}
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
