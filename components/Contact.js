import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [msg, setMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_q0m5oun', 'template_ar7hc5e', form.current, 'fP60skOY0tM5-GPbh')
      .then(() => setMsg("Message sent successfully!"))
      .catch(() => setMsg("Failed to send. Please try again."));
    e.target.reset();
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto bg-gray-800 text-white" data-aos="fade-up">
      <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col max-w-xl mx-auto space-y-4">
        <input type="text" name="from_name" placeholder="Your Name" required className="p-3 rounded bg-gray-900 text-white"/>
        <input type="email" name="email" placeholder="Your Email" required className="p-3 rounded bg-gray-900 text-white"/>
        <textarea name="message" placeholder="Your Message" required className="p-3 rounded bg-gray-900 text-white h-32"/>
        <button type="submit" className="bg-yellow-300 text-black px-4 py-2 rounded font-bold hover:bg-yellow-400">Send Message</button>
        {msg && <p className="text-center mt-2">{msg}</p>}
      </form>
      <div className="mt-8 text-center space-y-2 text-gray-300">
        <p>📧 Email: gswayam94@gmail.com</p>
        <p>🔗 LinkedIn: <a href="https://linkedin.com/in/swayam-gupta-a62b66329" target="_blank" rel="noreferrer" className="text-yellow-300 hover:underline">linkedin.com/in/swayam-gupta-a62b66329</a></p>
        <p>💻 GitHub: <a href="https://github.com/GSWAYAM9" target="_blank" rel="noreferrer" className="text-yellow-300 hover:underline">github.com/GSWAYAM9</a></p>
      </div>
    </section>
  );
};

export default Contact;
