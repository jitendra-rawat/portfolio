/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

   
    const phoneNumber = "917895718481";

    const text = `New Contact Message:%0A
Name: ${encodeURIComponent(form.name)}%0A
Email: ${encodeURIComponent(form.email)}%0A
Message: ${encodeURIComponent(form.message)}`;

    const url = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(url, "_blank");

    // Optional: clear form after sending
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-4 lg:px-8 py-20 relative"
    >
      {/* Decorative elements */}
      <div className="absolute -top-20 left-0 w-full h-full -z-10 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-purple-400 blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-lg font-poppins text-gray-500 mb-2">Let's Connect</p>
        <h2 className="font-bold font-poppins text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Get In Touch
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-gray-600">
          Feel free to reach out for collaborations or just to say hello!
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Email Card */}
        <a
          href="mailto:jtendrasingh101010@gmail.com"
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
              <SiGmail className="text-blue-600 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold font-poppins mb-2">Email Me</h3>
            <p className="text-gray-600 mb-4">
              jtendrasingh101010@gmail.com
            </p>
            <div className="flex items-center text-blue-500 font-medium">
              <span>Send Message</span>
              <IoMdSend className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </a>

        {/* LinkedIn Card */}
        <a
          href="https://www.linkedin.com/in/jitendra-rawat-10b472121/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
              <FaLinkedin className="text-blue-600 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold font-poppins mb-2">
              LinkedIn
            </h3>
            <p className="text-gray-600 mb-4">Jitendra Rawat</p>
            <div className="flex items-center text-blue-500 font-medium">
              <span>Connect</span>
              <IoMdSend className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </a>

        {/* Phone Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-6">
              <FaPhoneAlt className="text-blue-600 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold font-poppins mb-2">Phone</h3>
            <p className="text-gray-600 mb-4">Available upon request</p>
            <button className="text-blue-500 font-medium flex items-center">
              <span>Request Contact</span>
              <IoMdSend className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-20 max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-2xl font-semibold font-poppins text-center mb-6">
          Send Me a Message
        </h3>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
          >
            Send Message
            <IoMdSend className="ml-2" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
