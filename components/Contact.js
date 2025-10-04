import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [msg, setMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setMsg("Sending...");
    
    emailjs.sendForm('service_q0m5oun', 'template_ar7hc5e', form.current, 'fP60skOY0tM5-GPbh')
      .then(() => {
        setMsg("Message sent successfully! 🎉");
        setTimeout(() => setMsg(""), 5000);
      })
      .catch(() => {
        setMsg("Failed to send. Please try again.");
        setTimeout(() => setMsg(""), 5000);
      });
    
    e.target.reset();
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto bg-gray-900 text-white" data-aos="fade-up">
      <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col max-w-xl mx-auto space-y-4">
        <input 
          type="text" 
          name="from_name" 
          placeholder="Your Name" 
          required 
          className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-yellow-300 focus:outline-none"
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          required 
          className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-yellow-300 focus:outline-none"
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          required 
          className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-yellow-300 focus:outline-none h-32 resize-none"
        />
        <button 
          type="submit" 
          className="bg-yellow-300 text-black px-4 py-3 rounded font-bold hover:bg-yellow-400 transition-colors"
        >
          Send Message
        </button>
        {msg && <p className="text-center mt-2 text-yellow-300">{msg}</p>}
      </form>
      <div className="mt-12 text-center space-y-4 text-gray-300">
        <p className="text-xl font-semibold">Let's Connect!</p>
        <div className="flex justify-center space-x-8 mt-4">
          <div className="text-center">
            <p>📧 Email</p>
            <a href="mailto:gswayam94@gmail.com" className="text-yellow-300 hover:underline">gswayam94@gmail.com</a>
          </div>
          <div className="text-center">
            <p>🔗 LinkedIn</p>
            <a href="https://linkedin.com/in/swayam-gupta-a62b66329" target="_blank" rel="noreferrer" className="text-yellow-300 hover:underline">LinkedIn</a>
          </div>
          <div className="text-center">
            <p>💻 GitHub</p>
            <a href="https://github.com/GSWAYAM9" target="_blank" rel="noreferrer" className="text-yellow-300 hover:underline">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
