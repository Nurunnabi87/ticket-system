import {
  RiFacebookFill,
  RiInstagramLine,
  RiMailFill,
  RiTwitterXLine,
} from "@remixicon/react";
const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="footer grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 py-8 max-w-6xl mx-auto">
        <div className="container mx-auto px-4">
          <h2 className="logo text-lg font-bold">CS — Ticket System</h2>
          <p className=" text-gray-500 my-3 text-sm">
            A Customer Support (CS) Ticket System is a tool used to manage and
            track customer issues or service requests in an organized way.
          </p>
        </div>
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-bold mb-3">Company</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-500 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-white">
                Our Mission
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-bold mb-3">Services</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-500 hover:text-white">
                Products & Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-white">
                Customer Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-white">
                Download App
              </a>
            </li>
          </ul>
        </div>
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-bold mb-3">Information</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-500 hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-white">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-white">
                Join Us
              </a>
            </li>
          </ul>
        </div>
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-bold mb-3">Social Links</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-1 px-1  ">
              <a
                href="#"
                className="text-gray-500 bg-white rounded-xl w-4 h-4 flex items-center justify-center hover:text-gray-900"
              >
                <RiTwitterXLine />
              </a>
              <p className="text-gray-500 text-sm hover:text-gray-300">
                @CS — Ticket System
              </p>
            </li>
            <li className="flex items-center gap-1 px-1   ">
              <a
                href="#"
                className="text-gray-500 bg-white rounded-xl w-4 h-4 flex items-center justify-center hover:text-gray-900"
              >
                <RiInstagramLine />
              </a>
              <p className="text-gray-500 text-sm hover:text-gray-300">
                @CS — Ticket System
              </p>
            </li>
            <li className="flex items-center gap-1 px-1  ">
              <a
                href="#"
                className="text-gray-500 bg-white rounded-xl w-4 h-4 flex items-center justify-center hover:text-gray-900"
              >
                <RiFacebookFill />
              </a>
              <p className="text-gray-500 text-sm hover:text-gray-300">
                @CS — Ticket System
              </p>
            </li>
            <li className="flex items-center gap-1 px-1   ">
              <a
                href="#"
                className="text-gray-500 bg-white rounded-xl w-4 h-4 flex items-center justify-center hover:text-gray-900"
              >
                <RiMailFill />
              </a>
              <p className="text-gray-500 text-sm hover:text-gray-300">
                support@cst.com
              </p>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-gray-800" />
      <p className="text-center text-gray-500 text-sm py-5">
        &copy; {new Date().getFullYear()} CS — Ticket System. All rights
        reserved.
      </p>
    </div>
  );
};

export default Footer;
