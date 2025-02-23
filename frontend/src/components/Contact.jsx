import React, { useState } from "react";
import { motion } from "framer-motion";
import contactImg from "../../public/contactimg.webp";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzAjEnO4wDhtjSk6GSfS52lOqlRoeN01nkUay87fXFwoNf7WzzfgT6zdamLEbFLFvTi/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        }
      );
      
      setStatusMessage("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 bg-gradient-to-br from-gray-150 to-gray-100 mt-16" id="contact">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 flex justify-center">Reach Out to Us</h2>
      <div className="w-40 h-1 bg-[#4a75a3] mx-auto"></div>
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 relative mt-3">
        <motion.div 
          className="w-full md:w-1/2 flex flex-col items-start gap-4 relative h-full"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src={contactImg} 
            alt="Contact Illustration" 
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
          {/* <p className="text-left text-xl font-semibold absolute top-20 right-0 md:right-1/4 lg:right-0 xl:right-0">
            Let's Connect – Drop <br /> a Message Right here!
          </p> */}
        </motion.div>

        <motion.form
          className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 border border-gray-100 backdrop-blur-sm bg-white/50"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Enquery Form</h2>
            <div className="w-20 h-1 bg-[#4a75a3] mx-auto"></div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 text-sm border rounded-md bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 text-sm border rounded-md bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full p-2 text-sm border rounded-md bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600 transform hover:-translate-y-0.5 transition-all duration-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          
          {statusMessage && (
            <div className={`mt-4 text-center text-sm ${statusMessage.includes("Thank you") ? "text-green-600" : "text-red-600"}`}>
              <p>{statusMessage}</p>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
