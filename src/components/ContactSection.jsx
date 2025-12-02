import { useState } from "react";
import Swal from "sweetalert2";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({ title:"Success", text:"Message Sent", icon:"success",showConfirmButton:true });
    console.log(form);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          <span className="border-b-4 border-purple-600 pb-1">Contact Me</span>
        </h2>

        {/* Sub Heading */}
        <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
          Have a project in mind or want to connect? Feel free to reach out — I’d love to hear from you!
        </p>

        {/* Form */}
        <form 
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-2xl flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default ContactSection;
