import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMsg("Sending...");

    // EmailJS configuration
    emailjs.sendForm(
      'service_q0m5oun', 
      'template_ar7hc5e', 
      form.current, 
      'fP60skOY0tM5-GPbh'
    )
      .then((result) => {
        console.log('Email sent successfully:', result);
        setMsg("Message sent successfully! 🎉");
        setIsLoading(false);
        form.current.reset();
        
        // Clear success message after 5 seconds
        setTimeout(() => setMsg(""), 5000);
      })
      .catch((error) => {
        console.error('Email failed to send:', error);
        setMsg("Failed to send message. Please try again or contact me directly at gswayam94@gmail.com");
        setIsLoading(false);
        
        // Clear error message after 5 seconds
        setTimeout(() => setMsg(""), 5000);
      });
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
          disabled={isLoading}
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          required 
          className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-yellow-300 focus:outline-none"
          disabled={isLoading}
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          required 
          className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-yellow-300 focus:outline-none h-32 resize-none"
          disabled={isLoading}
        />
        <button 
          type="submit" 
          disabled={isLoading}
          className={`px-4 py-3 rounded font-bold transition-colors ${
            isLoading 
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-yellow-300 text-black hover:bg-yellow-400'
          }`}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
        
        {msg && (
          <div className={`text-center mt-2 p-3 rounded ${
            msg.includes('successfully') 
              ? 'bg-green-900 text-green-300' 
              : 'bg-red-900 text-red-300'
          }`}>
            {msg}
          </div>
        )}
      </form>

      <div className="mt-12 text-center space-y-4 text-gray-300">
        <p className="text-xl font-semibold">Let's Connect!</p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-4">
          <div className="text-center">
            <p>📧 Email</p>
            <a href="mailto:gswayam94@gmail.com" className="text-yellow-300 hover:underline block">
              gswayam94@gmail.com
            </a>
          </div>
          <div className="text-center">
            <p>🔗 LinkedIn</p>
            <a href="https://linkedin.com/in/swayam-gupta-a62b66329" target="_blank" rel="noreferrer" className="text-yellow-300 hover:underline block">
              LinkedIn Profile
            </a>
          </div>
          <div className="text-center">
            <p>💻 GitHub</p>
            <a href="https://github.com/GSWAYAM9" target="_blank" rel="noreferrer" className="text-yellow-300 hover:underline block">
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
