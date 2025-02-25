import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "FAQ", path: "/faqs" },
  ];

  const loanTypes = [
    { name: "Home Loan", path: "/home-loan" },
    { name: "Personal Loan", path: "/personal-loan" },
    { name: "Business Loan", path: "/business-loan" },
    { name: "Property Loan", path: "/property-loan" },
    { name: "Education Loan", path: "/education-loan" },
  ];

  const services = [
    { name: "EMI Calculator", path: "/emi-calculator" },
    { name: "Balance Transfer", path: "/balance-transfer" },
    { name: "Top-up Loan", path: "/top-up-loan" },
    { name: "Loan Insurance", path: "/loan-insurance" },
    { name: "Document Guide", path: "/document-guide" },
  ];

  return (
    <footer className="bg-[#1E2530] text-gray-300">
      {/* Main Footer Content */}
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">ABC Finance</h3>
            <p className="mb-4 text-sm leading-relaxed">
              Your trusted partner in financial solutions. We provide comprehensive
              loan services to help you achieve your dreams with ease and
              confidence.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center hover:text-blue-400 transition-colors duration-300"
                  >
                    <ArrowRight size={16} className="mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Loan Types */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Loans</h4>
            <ul className="space-y-3">
              {loanTypes.map((loan) => (
                <li key={loan.name}>
                  <Link
                    to={loan.path}
                    className="flex items-center hover:text-blue-400 transition-colors duration-300"
                  >
                    <ArrowRight size={16} className="mr-2" />
                    {loan.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                <p>123 Finance Street, Business District, City - 123456</p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0" />
                <p>+91 0934-047-9217</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0" />
                <p>info@abcfinance.com</p>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="text-white font-semibold mb-3">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-700 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} ABC Finance. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-sm hover:text-blue-400">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-sm hover:text-blue-400">
                Privacy Policy
              </Link>
              <Link to="/sitemap" className="text-sm hover:text-blue-400">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;