import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMsg("Sending your message...");

    // Get current date and time
    const now = new Date();
    const formData = {
      from_name: form.current.from_name.value,
      email: form.current.email.value,
      message: form.current.message.value,
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
      to_name: "Swayam"
    };

    // Send TWO emails: 
    // 1. Confirmation to user
    // 2. Notification to yourself
    
    const userEmailPromise = emailjs.send(
      'service_q0m5oun', 
      'template_ar7hc5e', // User confirmation template
      formData, 
      'fP60skOY0tM5-GPbh'
    );

    const adminEmailPromise = emailjs.send(
      'service_q0m5oun', 
      'portfolio_notification', // Your notification template
      formData, 
      'fP60skOY0tM5-GPbh'
    );

    // Execute both email sends
    Promise.all([userEmailPromise, adminEmailPromise])
      .then((result) => {
        console.log('All emails sent successfully:', result);
        setMsg("🎉 Message sent successfully! I'll get back to you within 24 hours. You'll receive a confirmation email shortly.");
        setIsLoading(false);
        form.current.reset();
        
        setTimeout(() => setMsg(""), 8000);
      })
      .catch((error) => {
        console.error('Email failed to send:', error);
        setMsg("❌ Failed to send message. Please email me directly at gswayam94@gmail.com");
        setIsLoading(false);
        
        setTimeout(() => setMsg(""), 8000);
      });
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto bg-gray-900 text-white" data-aos="fade-up">
      <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
      <p className="text-lg text-gray-300 text-center mb-8 max-w-2xl mx-auto">
        Have a question or want to work together? Send me a message and I'll get back to you within 24 hours.
      </p>
      
      <form ref={form} onSubmit={sendEmail} className="flex flex-col max-w-xl mx-auto space-y-4">
        <input 
          type="text" 
          name="from_name" 
          placeholder="Your Name" 
          required 
          className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-yellow-300 focus:outline-none transition-colors"
          disabled={isLoading}
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          required 
          className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-yellow-300 focus:outline-none transition-colors"
          disabled={isLoading}
        />
        <textarea 
          name="message" 
          placeholder="Your message... Tell me about your project or question"
          required 
          className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-yellow-300 focus:outline-none h-32 resize-none transition-colors"
          disabled={isLoading}
        />
        <button 
          type="submit" 
          disabled={isLoading}
          className={`px-4 py-3 rounded font-bold transition-all ${
            isLoading 
              ? 'bg-gray-600 cursor-not-allowed transform scale-95' 
              : 'bg-yellow-300 text-black hover:bg-yellow-400 hover:scale-105'
          }`}
        >
          {isLoading ? '📤 Sending...' : '🚀 Send Message'}
        </button>
        
        {msg && (
          <div className={`text-center mt-2 p-4 rounded-lg border ${
            msg.includes('🎉') 
              ? 'bg-green-900/20 border-green-500 text-green-300' 
              : 'bg-red-900/20 border-red-500 text-red-300'
          }`}>
            <p className="font-medium">{msg}</p>
            {msg.includes('🎉') && (
              <p className="text-sm mt-2 text-green-200">
                Check your email for a confirmation message.
              </p>
            )}
          </div>
        )}
      </form>

      <div className="mt-16 text-center space-y-6 text-gray-300">
        <p className="text-xl font-semibold">💬 Other Ways to Connect</p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12 mt-4">
          <div className="text-center">
            <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors">
              <p className="text-lg mb-2">📧 Direct Email</p>
              <a href="mailto:gswayam94@gmail.com" className="text-yellow-300 hover:underline font-medium">
                gswayam94@gmail.com
              </a>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors">
              <p className="text-lg mb-2">🔗 LinkedIn</p>
              <a href="https://linkedin.com/in/swayam-gupta-a62b66329" target="_blank" rel="noreferrer" className="text-yellow-300 hover:underline font-medium">
                Connect with me
              </a>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors">
              <p className="text-lg mb-2">💻 GitHub</p>
              <a href="https://github.com/GSWAYAM9" target="_blank" rel="noreferrer" className="text-yellow-300 hover:underline font-medium">
                View my projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
