import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <nav className="flex items-center justify-between py-4">
        {/* Logo */}
        <h2 className="text-2xl font-bold">CS — Ticket System</h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-4">
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

          <button className="bg-[#422AD5] text-white px-4 py-2 rounded-md hover:bg-[#3a25b0] transition">
            + New Ticket
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-lg p-4">
          <ul className="flex flex-col space-y-3">
            <li>
              <a href="#" className="text-gray-700">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Changelog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Download
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Contact
              </a>
            </li>
          </ul>

          <button className="mt-4 w-full bg-[#422AD5] text-white py-2 rounded-md">
            + New Ticket
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
