import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q0m5oun",    // Your Service ID
        "template_ar7hc5e",   // Your Template ID
        form.current,
        "fP60skOY0tM5-GPbh"   // Your Public Key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatus("❌ Failed to send. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="grid gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="p-3 rounded bg-gray-800 text-white"
        />
        <input
          type="email"
          name="reply_to"
          placeholder="Your Email"
          required
          className="p-3 rounded bg-gray-800 text-white"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="p-3 rounded bg-gray-800 text-white"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 px-6 py-3 rounded text-white hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>

      {status && <p className="mt-4">{status}</p>}
    </section>
  );
};

export default Contact;
