"use client";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => { setSuccess("Message sent successfully!"); e.target.reset(); },
        () => { setSuccess("Failed to send. Please try again."); }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto" data-aos="zoom-in">
      <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        <div className="text-center md:text-left">
          <p className="text-gray-300 mb-2">📧 Email: 
            <a href="mailto:gswayam94@gmail.com" className="text-blue-400 hover:underline ml-1">
              gswayam94@gmail.com
            </a>
          </p>
          <p className="text-gray-300 mb-2">🔗 LinkedIn: 
            <a href="https://www.linkedin.com/in/swayam-gupta-a62b66329/" className="text-blue-400 hover:underline ml-1" target="_blank">
              linkedin.com/in/swayam-gupta
            </a>
          </p>
          <p className="text-gray-300 mb-2">💻 GitHub: 
            <a href="https://github.com/GSWAYAM9" className="text-blue-400 hover:underline ml-1" target="_blank">
              github.com/GSWAYAM9
            </a>
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 w-full max-w-md">
          <input type="text" name="from_name" placeholder="Your Name" required className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none"/>
          <input type="email" name="from_email" placeholder="Your Email" required className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none"/>
          <textarea name="message" rows="5" placeholder="Your Message" required className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none"></textarea>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 transition py-3 rounded-lg text-white font-semibold">
            Send Message
          </button>
          {success && <p className="text-green-400 mt-2">{success}</p>}
        </form>
      </div>
    </section>
  );
}
