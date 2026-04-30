import contactImg from "../../assets/contact-img.png";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("FORM DATA:", formData);
    emailjs
      .send(
        "service_0qu4azy",
        "template_h1f9omm",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "iJe8nYBfJ9gbauyLx",
      )
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message");
      });
  };
  return (
    <section
      id="contact"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
      className="py-8 sm:py-12 md:py-18 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-4 lg:mb-2 sm:mb-8 md:mb-10"
          data-aos="fade-up">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold sm:mb-3"
            style={{
              color: darkMode ? "white" : "#1f2937",
            }}>
            Get In
            <span
              style={{
                background: "linear-gradient(to right,#f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}>
              Touch
            </span>
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl"
            style={{
              color: darkMode ? "#d1d5db" : "#6b7280",
            }}>
            Let's discuss your project
          </p>
        </div>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-6
         md:gap-8 items-center">
          <div
            className="flex justify-center order-2 lg:order-1"
            data-aos="fade-right">
            <img
              src={contactImg}
              alt="contact"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md
            h-auto object-contain"
            />
          </div>
          <form
            onSubmit={handleSubmit}
            style={{
              background: darkMode
                ? "linear-gradient(to right,#1f2937, #111827)"
                : "linear-gradient(to right,#ffffff, #f9fafb)",
              borderColor: darkMode ? "#374151" : "#e5e7eb",
            }}
            className="rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order-1 lg:order-2"
            data-aos="fede-left">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3
              sm:gap-4 mb-3 sm:mb-4">
              {/* First name */}
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                style={{
                  backgroundColor: darkMode ? "#374151" : "#faede3",
                  borderColor: darkMode ? "#4b5563" : "#d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
                className="w-full px-3 sm:px-4 py-2 sm:py-3
                rounded-lg text-sm sm:text-base
                focus:border-yellow-500 focus:right-2
                focus:ring-yellow-500/20 transition-all"
                required
              />
              {/* Last Name */}
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                style={{
                  backgroundColor: darkMode ? "#374151" : "#faede3",
                  borderColor: darkMode ? "#4b5563" : "#d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
                className="w-full px-3 sm:px-4 py-2 sm:py-3
                rounded-lg text-sm sm:text-base
                focus:border-yellow-500 focus:right-2
                focus:ring-yellow-500/20 transition-all"
                required
              />
              {/* Email Address */}
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  backgroundColor: darkMode ? "#374151" : "#faede3",
                  borderColor: darkMode ? "#4b5563" : "#d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
                className="w-full px-3 sm:px-4 py-2 sm:py-3
                rounded-lg text-sm sm:text-base
                focus:border-yellow-500 focus:right-2
                focus:ring-yellow-500/20 transition-all"
                required
              />
              {/* Phone Number */}
              <input
                type="tel"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={{
                  backgroundColor: darkMode ? "#374151" : "#faede3",
                  borderColor: darkMode ? "#4b5563" : "#d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
                className="w-full px-3 sm:px-4 py-2 sm:py-3
                rounded-lg text-sm sm:text-base
                focus:border-yellow-500 focus:right-2
                focus:ring-yellow-500/20 transition-all"
                required
              />
            </div>
            {/* Message */}
            <textarea
              rows="4"
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{
                backgroundColor: darkMode ? "#374151" : "#faede3",
                borderColor: darkMode ? "#4b5563" : "#d1d5db",
                color: darkMode ? "white" : "#1f2937",
              }}
              className="w-full px-3 sm:px-4 py-2 sm:py-3
                rounded-lg text-sm sm:text-base
                focus:border-yellow-500 focus:right-2
                focus:ring-yellow-500/20 transition-all resize:none"
              required
            />
            <button
              type="submit"
              style={{
                background: "linear-gradient(to right,#f97316, #f59e0b)",
              }}
              className="w-full py-2 sm:py-3 text-white
              font-semibold rounded-lg text-sm sm:text-base hover:shadow-lg hover:shadow-yellow-500/25
              hover:scale-[1.02] transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
