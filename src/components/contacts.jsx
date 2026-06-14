"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (message, isSuccess) => {
    setSuccess(isSuccess);
    setToastMessage(message);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 5000);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setToastVisible(false);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name,
          email,
          message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      showToast("Message sent successfully ✅", true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Email Error:", error);
      showToast("Failed to send message. Please try again.", false);
    } finally {
      setLoading(false);
    }
  };

  const contactLinks = [
    {
      id: 1,
      name: "Email",
      value: "EMAIL-ADDRESS",
      href: "mailto:asiwajuadunade9@gmail.com",
      icon: "/svgs/email.png",
    },
    {
      id: 2,
      name: "WhatsApp",
      value: "+234 812 848 1141",
      href: "https://wa.me/2348128481141",
      icon: "/svgs/whatsapp.png",
    },
    {
      id: 3,
      name: "LinkedIn",
      value: "Adunade Asiwaju",
      href: "https://www.linkedin.com/in/adunade-asiwaju-043353329",
      icon: "/svgs/linkedin.png",
    },
    {
      id: 4,
      name: "GitHub",
      value: "Asiwaju-Adunade",
      href: "https://github.com/Asiwaju-Adunade",
      icon: "/svgs/github.png",
    },
    {
      id: 5,
      name: "Instagram",
      value: "_cutie_adun",
      href: "https://www.instagram.com/_cutie_adun?igsh=MXVkbDl0YWcwbGdvdQ==",
      icon: "/svgs/instagram.png",
    },
  ];

  return (
    <div id="contacts" className="w-full bg-gray-700 text-white py-10">
      {toastVisible && (
        <div
          className={`fixed top-4 md:right-30 md:z-50 right-10 rounded-2xl px-8 py-5 text-sm font-semibold text-white  ${
            success ? "bg-gray-500" : "bg-rose-600"
          }`}
        >
          {toastMessage}
        </div>
      )}

      <div className="mx-auto px-6 md:px-20">
        <div className="flex items-center gap-2 mb-8">
          <hr className="border-red-300 border-2 w-10" />
          <h1 className="text-xl">Contact</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl font-bold text-red-300 font-playfair">
              Let's build something great together!
            </h2>

            <p className="text-gray-300 leading-7 text-lg">
              I am open to frontend web development roles and collaboration opportunities. Feel free to reach out using the
              contact form or any of the social links.
            </p>

            <div className="flex flex-col gap-4 mt-4">
              {contactLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 hover:bg-gray-600 transition-colors w-fit min-w-[280px]"
                >
                  <Image
                    src={link.icon}
                    alt={link.name}
                    width={35}
                    height={35}
                    className="object-contain"
                  />

                  <div>
                    <p className="text-xs text-red-300 font-semibold">
                      {link.name}
                    </p>
                    <p className="text-sm font-medium">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-600"
          >
            <form onSubmit={sendEmail} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-red-300"
                >
                  Full Name
                </label>

                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Adunade Asiwaju"
                  className="p-3 rounded-md bg-white text-black focus:outline-none placeholder-gray-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-red-300"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="adunade@example.com"
                  className="p-3 rounded-md bg-white text-black focus:outline-none placeholder-gray-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-red-300"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Tell me about your project..."
                  className="p-3 rounded-md bg-white text-black focus:outline-none placeholder-gray-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-red-300 hover:bg-red-400 text-black font-semibold py-3 px-6 rounded-md transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
