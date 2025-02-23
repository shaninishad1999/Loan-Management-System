import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Calculator, User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(false);
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const navItems = [
    {
      name: "Loans",
      path: "#",
      dropdown: [
        { name: "Home Loan", path: "/home-loan" },
        { name: "Personal Loan", path: "/personal-loan" },
        { name: "Business Loan", path: "/business-loan" },
        { name: "Property Loan", path: "/property-loan" },
        { name: "Loan Transfer", path: "/loan-transfer" },
      ],
    },
    {
      name: "Services",
      path: "#",
      dropdown: [
        { name: "EMI Calculator", path: "/emi-calculator" },
        { name: "Balance Transfer", path: "/balance-transfer" },
        { name: "Top-up Loan", path: "/top-up-loan" },
        { name: "Insurance", path: "/insurance" },
      ],
    },
    {
      name: "About",
      path: "#",
      dropdown: [
        { name: "Company Profile", path: "/about" },
        { name: "Documents Required", path: "/documents" },
        { name: "Process Guide", path: "/process" },
        { name: "FAQs", path: "/faqs" },
      ],
    },
  ];

  return (
    <nav className="bg-[#1E2530] p-4 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Company Name */}
        <Link to="/" className="text-xl font-bold text-blue-400">
          XYZ Finance
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <div
          className={`lg:flex lg:items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-[#1E2530] lg:bg-transparent transition-all duration-500 ease-in-out ${
            isOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-10"
          } lg:opacity-100 lg:visible lg:translate-y-0`}
        >
          <ul className="lg:flex lg:space-x-6">
            {navItems.map((item, index) => (
              <li key={item.name} className="relative group">
                <button
                  className="w-full flex items-center justify-between py-3 px-6 text-white hover:text-blue-400 transition-all"
                  onClick={() => toggleDropdown(index)}
                >
                  {item.name}
                  <ChevronDown
                    size={16}
                    className={`ml-2 transition-transform duration-200 ${
                      activeDropdown === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <ul
                  className={`lg:absolute lg:left-0 lg:top-full bg-[#1E2530] w-full lg:w-48 shadow-lg rounded-b-lg ${
                    activeDropdown === index ? "block" : "hidden"
                  } lg:group-hover:block`}
                >
                  {item.dropdown.map((dropItem) => (
                    <li key={dropItem.name}>
                      <Link
                        to={dropItem.path}
                        className="block py-2 px-6 text-white hover:bg-blue-600 hover:text-white transition-all"
                        onClick={handleLinkClick}
                      >
                        {dropItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Items */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Calculator Quick Access */}
          <Link
            to="/emi-calculator"
            className="text-white hover:text-blue-400 flex items-center space-x-2"
          >
            <Calculator size={18} />
            <span>EMI Calculator</span>
          </Link>

          {/* Contact Number */}
          <div className="text-white flex items-center space-x-2">
            <Phone size={18} />
            <span>0934-047-9217</span>
          </div>

          {/* Login/Register */}
          <Link
            to="/login"
            className="text-white hover:text-blue-400 flex items-center space-x-2"
          >
            <User size={18} />
            <span>Login</span>
          </Link>

          {/* Apply Now Button */}
          <Link
            to="/apply"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-all font-medium"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
