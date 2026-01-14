import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import TicketCard from "../components/TicketCard";
import TaskSidebar from "../components/TaskSidebar";
import Swal from "sweetalert2";

const Home = () => {
  const [tickets, setTickets] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);
  const [resolvedCount, setResolvedCount] = useState(0);

  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => setTickets(data.map((t) => ({ ...t, status: "Open" }))));
  }, []);

  const handleTicketClick = (ticket) => {
    if (ticket.status === "In Progress" || ticket.status === "Resolved") {
      return;
    }

    setTickets((prev) =>
      prev.map((t) =>
        t.id === ticket.id ? { ...t, status: "In Progress" } : t
      )
    );

    setTasks((prev) => [...prev, ticket]);

    Swal.fire("Added!", "Ticket added to Task Status", "success");
  };

  const handleComplete = (task) => {
   
    setTasks((prev) => prev.filter((t) => t.id !== task.id));

 
    setResolvedTasks((prev) => [...prev, task]);

    
    setResolvedCount((prev) => prev + 1);

  
    setTickets((prev) => prev.filter((t) => t.id !== task.id));

    Swal.fire("Completed!", "Task marked as resolved", "success");
  };

  const inProgressCount = tickets.filter(
    (t) => t.status === "In Progress"
  ).length;

  return (
    <div className="container mx-auto p-4">
      <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount} />

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {tickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onClick={handleTicketClick}
            />
          ))}
        </div>

        <TaskSidebar
          tasks={tasks}
          resolvedTasks={resolvedTasks}
          handleComplete={handleComplete}
        />
      </div>
    </div>
  );
};

export default Home;
