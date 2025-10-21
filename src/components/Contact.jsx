import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";


export default function ContactForm() {
  const form = useRef();
  const [result, setResult] = useState({ message: "", success: null });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_spnsdx4",
        "template_yik2g2m",
        form.current,
        "5bEnyFH1-WHWO0UTA"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setResult({
            message: "✅ Your message has been sent successfully!",
            success: true,
          });
          e.target.reset();

          // Hide message after few seconds
          setTimeout(() => setResult({ message: "", success: null }), 4000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setResult({
            message: "❌ Failed to send message. Please try again later.",
            success: false,
          });
        }
      );
  };

  return (
    <div className="py-12 text-center" id="contact">
      <h2 className="text-4xl font-bold mb-6 uppercase">Get In Touch</h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-10">
        Have a question, collaboration idea, or just want to say hello? Fill out the form below
        and I’ll get back to you soon!
      </p>

      {/* Contact Form */}
      <form ref={form} onSubmit={sendEmail} className="max-w-2xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <button
          type="submit"
          className="px-6 py-3 btn-grad cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all"
        >
          Send Message
        </button>

        {/* ✅ Message Feedback */}
        {result.message && (
          <p
            className={`mt-4 h-fit w-fit lg:h-full lg:w-full lg:py-2 font-bold rounded-2xl text-lg transition-all duration-300 ${
              result.success
                ? "text-green-600 bg-blue-600 dark:text-green-400"
                : "text-red-600 bg-amber-300 dark:text-red-400  "
            }`}
          >
            {result.message}
          </p>
        )}
      </form>
    </div>
  );
}