import {
  RiFacebookFill,
  RiInstagramLine,
  RiMailFill,
  RiTwitterXLine,
} from "@remixicon/react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Footer Content */}
      <div
        className="max-w-6xl mx-auto px-5 py-12 
      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10"
      >
        {/* Logo Section */}
        <div className="sm:col-span-2 lg:col-span-2">
          <h2 className="text-xl md:text-2xl font-bold">CS — Ticket System</h2>

          <p className="text-gray-400 mt-4 text-sm leading-relaxed max-w-md">
            A Customer Support (CS) Ticket System is a tool used to manage and
            track customer issues or service requests in an organized way.
            Customers create tickets describing their problems and support
            agents handle them efficiently.
          </p>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Company</h2>

          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Our Mission
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Services</h2>

          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Products & Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Customer Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Download App
              </a>
            </li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Information</h2>

          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Join Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Social Links</h2>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <span className="bg-white text-black p-2 rounded-full">
                <RiTwitterXLine size={18} />
              </span>
              <span className="text-gray-400 hover:text-white cursor-pointer">
                @CS Ticket System
              </span>
            </li>

            <li className="flex items-center gap-3">
              <span className="bg-white text-black p-2 rounded-full">
                <RiInstagramLine size={18} />
              </span>
              <span className="text-gray-400 hover:text-white cursor-pointer">
                @CS Ticket System
              </span>
            </li>

            <li className="flex items-center gap-3">
              <span className="bg-white text-black p-2 rounded-full">
                <RiFacebookFill size={18} />
              </span>
              <span className="text-gray-400 hover:text-white cursor-pointer">
                CS Ticket System
              </span>
            </li>

            <li className="flex items-center gap-3">
              <span className="bg-white text-black p-2 rounded-full">
                <RiMailFill size={18} />
              </span>
              <span className="text-gray-400 hover:text-white cursor-pointer">
                support@cst.com
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 text-center text-gray-500 text-sm py-5 px-4">
        &copy; {new Date().getFullYear()} CS — Ticket System. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
