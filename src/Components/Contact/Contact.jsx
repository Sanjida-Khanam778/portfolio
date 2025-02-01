import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import fb from "../../assets/icons/facebook.png";
import insta from "../../assets/icons/insta.png";
import twitter from "../../assets/icons/twitter.png";

const Contact = () => {
  return (
    <footer className="bg-[#FFF8F3] text-black p-10 mb-10 md:mb-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Column: Contact Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-gray-500 mb-4">
            Feel free to reach out via email, phone, or WhatsApp. Available between 9:00 A.M - 8:00 P.M ET, Monday to Friday.
          </p>

          {/* Contact Details */}
          <div className="space-y-2">
            <p className="flex items-center gap-2 text-lg">
              <FaEnvelope className="text-red-500" /> 
              <a href="mailto:sanjida.ice.778@gmail.com" className="text-blue-600 hover:underline">sanjida.ice.778@gmail.com</a>
            </p>
            <p className="flex items-center gap-2 text-lg">
              <FaPhone className="text-green-500" /> 01684796286
            </p>
            <p className="flex items-center gap-2 text-lg">
              <FaWhatsapp className="text-green-600" /> 
              <a href="https://wa.me/01684796286" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Chat on WhatsApp
              </a>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={fb} alt="Facebook" className="w-8 h-8"/>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="Instagram" className="w-8 h-8"/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" className="w-8 h-8"/>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-md bg-white text-black border border-gray-300 focus:outline-none"/>
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded-md bg-white text-black border border-gray-300 focus:outline-none"/>
            <textarea placeholder="Message" rows="5" className="w-full p-3 rounded-md bg-white text-black border border-gray-300 focus:outline-none"></textarea>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md font-bold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
