const Navbar = () => {
  return (
    <div>
      <nav className="navbar flex items-center justify-between py-4">
        <h2 className="logo text-2xl font-bold">CS — Ticket System</h2>
        <div className="nav-items flex items-center space-x-6">
          <ul className="nav-links flex space-x-4">
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Changelog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Download
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Contact
              </a>
            </li>
          </ul>
          <button className="bg-[#422AD5] text-white px-4 py-2 rounded-md hover:bg-[#3a25b0] transition duration-300">
            + New Ticket
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
