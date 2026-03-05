import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
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
      <Navbar />
      <div className="main-container bg-gray-100 ">
        <Banner inProgress={inProgress} resolved={resolved} />
        <MainSection
          customerTickets={customerTickets}
          inProgress={inProgress}
          resolved={resolved}
          handleAddTask={handleAddTask}
          handleComplete={handleComplete}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
