import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import TicketCard from "../components/TicketCard";
import TaskSidebar from "../components/TaskSidebar";
import Swal from "sweetalert2";

const Home = () => {
  const [tickets, setTickets] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => setTickets(data))
      .catch((err) => console.error(err));
  }, []);

  
  const handleAddTask = (ticket) => {
    if (tasks.find((t) => t.id === ticket.id)) {
      Swal.fire(
        "Already Added!",
        `${ticket.title} is already in tasks.`,
        "info"
      );
      return;
    }
    setTasks((prev) => [...prev, ticket]);
    Swal.fire("Added!", `${ticket.title} added to tasks.`, "success");
  };


  const handleComplete = (id) => {
    Swal.fire("Completed!", "Task marked as resolved.", "success");
    setTasks((prev) => prev.filter((t) => t.id !== id));
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: "Resolved" } : t))
    );
  };

  return (
    <div className="container mx-auto p-4">
      <Banner tickets={tickets} />
      <div className="grid md:grid-cols-3 gap-6">
        {/* Left: Ticket Cards (2 columns) */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {tickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              handleAddTask={handleAddTask}
            />
          ))}
        </div>

        
        <div className="md:col-span-1">
          <TaskSidebar tasks={tasks} handleComplete={handleComplete} />
        </div>
      </div>
    </div>
  );
};

export default Home;
