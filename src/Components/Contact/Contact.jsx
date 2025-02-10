import axios from "axios";
import React, { useState } from "react";
import { CgSpinnerAlt } from "react-icons/cg";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const handleSubmit = async e =>{
    setLoading(true)
    e.preventDefault()
    const form = e.target
    const name= form.name.value
    const email= form.email.value
    const message= form.message.value
    const msgData = {
      name, email, message
    }
    const {data} = await axios.post('https://portfolio-server-nine-umber.vercel.app/sendMails', msgData)
    if(data){
      Swal.fire({
        title: "Message sent!",
        icon: "success",
        draggable: true
      });
    }
    setLoading(false)
  }
  return (
    <footer className="text-white md:p-16 mt-10 mx-auto mb-10 md:mb-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column: Contact Info */}
        <div className="backdrop-blur-md bg-white/10 border flex flex-col border-white/20 p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold mb-4 text-[#15F5BA] leading-loose tracking-widest">
            Let's Connect
          </h3>
          <p className="mb-6 text-gray-300">
            Reach out via email, phone, or WhatsApp. I'm available to discuss
            ideas, collaborate, or assist with your queries. Let's connect and
            create something amazing together!
          </p>

          {/* Contact Details */}
          <div className="space-y-3 flex-grow flex flex-col justify-start">
            <p className="flex items-center gap-3 text-lg">
              <FaEnvelope className="text-red-500" />
              <a
                href="mailto:sanjida.ice.778@gmail.com"
                className="hover:text-[#15F5BA] transition duration-300"
              >
                sanjida.ice.778@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-3 text-lg">
              <FaPhone className="text-green-500" /> 01684796286
            </p>
            <p className="flex items-center gap-3 text-lg">
              <FaWhatsapp className="text-green-600" />
              <a
                href="https://wa.me/01684796286"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#15F5BA] transition duration-300"
              >
                Chat on WhatsApp
              </a>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-5 mt-6">
            <a
              href="https://www.facebook.com/profile.php?id=100034140082279"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-3xl hover:text-[#15F5BA]"></FaFacebook>
            </a>
            <a
              href="https://www.linkedin.com/in/sanjida-khanam-ice"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-3xl hover:text-[#15F5BA]"></FaLinkedin>
            </a>
            <a
              href="https://github.com/Sanjida-Khanam778"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-3xl hover:text-[#15F5BA]"></FaGithub>
            </a>
            <a
              href="https://x.com/SanjidaKhans"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-3xl hover:text-[#15F5BA]"></FaTwitter>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold mb-4 text-[#15F5BA] leading-loose tracking-widest">
            Send a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-400 text-white placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-400 text-white placeholder-gray-400"
            />
            <textarea
              placeholder="Message"
              name="message"
              rows="5"
              className="w-full p-3 rounded-md bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-400 text-white placeholder-gray-400"
            ></textarea>
            {loading ? (
              <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#14e4ac] to-[#3597b5] hover:from-[#0EBF94] hover:to-[#15F5BA] text-white p-3 rounded-md font-medium shadow-lg transition duration-300"
            >
                            <CgSpinnerAlt className="animate-spin m-auto" />

            </button>
              ) : (
                <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#14e4ac] to-[#3597b5] hover:from-[#0EBF94] hover:to-[#15F5BA] text-white p-3 rounded-md font-medium shadow-lg transition duration-300"
            >
              Send Message
            </button>
              )}
            
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
