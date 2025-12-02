import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message sent:", form);
    Swal.fire({ title:"Success", text:"Message Sent", icon:"success",showConfirmButton:true });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-purple-200 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Contact <span className="text-purple-600">Me</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            I'm always open to discussing new opportunities, project ideas, or
            collaborations. Whether you want to ask a question, share feedback,
            or just say hello — feel free to reach out!
          </p>
          <div className="space-y-3 text-gray-700">
            <p><strong>Email:</strong> rajanbhupesh@gmail.com</p>
            <p><strong>Location:</strong> Tiruppur, Tamil Nadu</p>
            <p><strong>Availability:</strong> Open for full-time roles & freelance work</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-2xl p-8 space-y-6">
          <div>
            <label className="block mb-1 font-medium">Your Name</label>
            <input type="text" name="name"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required/>
          </div>
          <div>
            <label className="block mb-1 font-medium">Your Email</label>
            <input type="email" name="email"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required/>
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea name="message" rows="6"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex justify-around gap-2">
            <button
              type="submit"
              className="w-50 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition">
              Send Message
            </button>
            <button type="button" className="bg-gray-200 w-50 rounded-lg hover:bg-gray-300 transition" 
            onClick={ ()=> navigate('/') }>
              Back To Home
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
