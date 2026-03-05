import { RiCalendarLine, RiCircleLine } from "@remixicon/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainSection = ({
  customerTickets,
  inProgress,
  resolved,
  handleAddTask,
  handleComplete,
}) => {
  return (
    <div className="py-10 max-w-6xl mx-auto">
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="flex gap-8">
        {/* LEFT SIDE - Customer Tickets */}
        <div className="w-2/3">
          <h2 className="text-xl font-bold mb-4">Customer Tickets</h2>

          <div className="grid grid-cols-2 gap-6">
            {customerTickets.map((ticket) => (
              <div
                key={ticket.id}
                onClick={() => handleAddTask(ticket)}
                className="bg-white p-5 rounded-lg shadow hover:shadow-lg cursor-pointer transition"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">{ticket.title}</h3>
                  <button
                    className={`text-sm px-2 py-1 rounded-2xl flex items-center gap-1 ${ticket.status === "Open" ? "bg-[#b9f8cf] text-[#0B5E06]" : ticket.status === "In-Progress" ? "bg-[#f8d9b9] text-[#5E3B0B]" : "bg-[#c9c9c9] text-[#4a4a4a]"}`}
                  >
                    <span
                      className={`flex items-center justify-center w-3 h-3 rounded-full ${ticket.status === "Open" ? "bg-[#0B5E06]" : ticket.status === "In-Progress" ? "bg-[#5E3B0B]" : "bg-[#4a4a4a]"}`}
                    >
                      <RiCircleLine />
                    </span>
                    {ticket.status}
                  </button>
                </div>

                <p className="text-sm text-gray-600">{ticket.description}</p>
                <div className="flex justify-between items-center text-sm mt-4">
                  <div className="flex gap-2 justify-between items-center ">
                    <p className="text-gray-600">#{ticket.id}</p>
                    <p
                      className={`text-gray-600 ${ticket.priority === "High" ? "text-red-500" : ticket.priority === "Medium" ? "text-yellow-500" : "text-green-500"}`}
                    >
                      {ticket.priority.toUpperCase()} PRIORITY
                    </p>
                  </div>
                  <div className="flex gap-2 justify-between items-center "></div>
                  <p className="text-gray-600">{ticket.customer}</p>
                  <p className="text-gray-600 flex items-center gap-1">
                    <span className="flex items-center justify-center w-4 h-4">
                      <RiCalendarLine />
                    </span>
                    {new Date(ticket.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/3 space-y-6">
          {/* Task Status */}
          <div className="bg-gray-100 p-5 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Task Status</h2>

            {inProgress.length === 0 ? (
              <p className="text-gray-500">No tasks in progress</p>
            ) : (
              inProgress.map((ticket) => (
                <div
                  key={ticket.id}
                  className="bg-white p-4 mb-3 rounded shadow flex justify-between items-center"
                >
                  <span>{ticket.title}</span>
                  <button
                    onClick={() => handleComplete(ticket)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Complete
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Resolved List */}
          <div className="bg-green-100 p-5 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Resolved List</h2>

            {resolved.length === 0 ? (
              <p className="text-gray-500">No resolved tasks</p>
            ) : (
              resolved.map((ticket) => (
                <div
                  key={ticket.id}
                  className="bg-white p-3 mb-2 rounded shadow"
                >
                  {ticket.title}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
