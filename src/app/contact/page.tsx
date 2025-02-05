"use client";

import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid"; // Updated import path
import React, { useState } from "react";

interface ContactDetailProps {
  icon: React.ReactNode;
  text: string;
}

function ContactDetail({ icon, text }: ContactDetailProps) {
  return (
    <p className="flex items-start -mx-2">
      {icon}
      <span className="mx-2 text-gray-700 truncate w-72">{text}</span>
    </p>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Determine the correct API URL
    const apiUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api/contact"
        : "/api/contact";

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Message Sent!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container px-6 py-12 mx-auto">
      <div className="lg:flex lg:items-center lg:-mx-6">
        <div className="lg:w-1/2 lg:mx-6">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
            Contact us for more info
          </h1>
          <div className="mt-6 space-y-8 md:mt-8">
            <ContactDetail
              icon={<MapPinIcon className="w-6 h-6 text-blue-500" />}
              text="Kingdom of Saudi Arabia, Al Baha, Baha University"
            />
            <ContactDetail
              icon={<PhoneIcon className="w-6 h-6 text-blue-500" />}
              text="966505512312"
            />
            <ContactDetail
              icon={<EnvelopeIcon className="w-6 h-6 text-blue-500" />}
              text="444009345, 444024642"
            />
          </div>
        </div>

        <div className="mt-8 lg:w-1/2 lg:mx-6">
          <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl lg:max-w-xl">
            <h1 className="text-lg font-medium text-gray-700">
              What do you want to ask?
            </h1>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm text-gray-600">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-6">
                <label className="block mb-2 text-sm text-gray-600">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="johndoe@example.com"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-6">
                <label className="block mb-2 text-sm text-gray-600">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Get in Touch
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}