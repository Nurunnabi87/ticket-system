import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Banner from "./components/Banner";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import ticketsData from "./data/tickets";

function App() {
  const [customerTickets, setCustomerTickets] = useState(ticketsData);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  // Add to In-Progress
  const handleAddTask = (ticket) => {
    toast.success(`${ticket.title} added to In-Progress`);

    setInProgress([...inProgress, ticket]);
    setCustomerTickets(customerTickets.filter((t) => t.id !== ticket.id));
  };


  // Complete Task
  const handleComplete = (ticket) => {
    toast.info(`${ticket.title} marked as Resolved`);

    setInProgress(inProgress.filter((t) => t.id !== ticket.id));
    setResolved([...resolved, ticket]);
  };
  return (
    <>
      <div className="main-container max-w-6xl mx-auto">
        <Navbar />
        <Banner inProgress={inProgress} resolved={resolved} />
        <MainSection
          customerTickets={customerTickets}
          inProgress={inProgress}
          resolved={resolved}
          handleAddTask={handleAddTask}
          handleComplete={handleComplete}
        />
      </div>
    </>
  );
}

export default App;
