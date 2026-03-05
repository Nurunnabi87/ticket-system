const Banner = ({ inProgress, resolved }) => {
  return (
    <div className="bg-gray-100 flex flex-col md:flex-row gap-5 py-10 px-4 text-white max-w-6xl mx-auto">
      {/* In Progress Card */}
      <div className="w-full md:w-1/2 h-36 md:h-40 bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-lg flex flex-col justify-center items-center">
        <h2 className="text-lg md:text-xl font-bold">In-Progress</h2>
        <p className="text-3xl md:text-4xl font-bold">{inProgress.length}</p>
      </div>

      {/* Resolved Card */}
      <div className="w-full md:w-1/2 h-36 md:h-40 bg-linear-to-r from-[#54CF68] to-[#00827A] rounded-lg flex flex-col justify-center items-center">
        <h2 className="text-lg md:text-xl font-bold">Resolved</h2>
        <p className="text-3xl md:text-4xl font-bold">{resolved.length}</p>
      </div>
    </div>
  );
};

export default Banner;
