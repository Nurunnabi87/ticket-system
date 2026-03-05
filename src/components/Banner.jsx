const Banner = () => {
  return (
    <div className="bg-gray-100 flex gap-5 mt-10 ">
      <div className="w-1/2 h-40 bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-lg flex flex-col justify-center items-center">
      <h3 className="text-white ">In-Progress</h3>
      <p className="text-white text-4xl font-bold">0</p>
      </div>

      <div className="w-1/2 h-40 bg-linear-to-r from-[#54CF68] to-[#00827A] rounded-lg flex flex-col justify-center items-center">
      <h3 className="text-white">Resolved</h3>
      <p className="text-white text-4xl font-bold">0</p>
      </div>
    </div>
  );
};

export default Banner;
