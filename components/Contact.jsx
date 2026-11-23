
"use client";

import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaFacebookF,
  FaClock,
  FaUser,
  FaCalendarAlt,
  FaTruck,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const phone = "01986-808725";
  const whatsapp = "8801986808725";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    address: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Our Location",
      description: "Azampur Kachabazar, Uttara-Dhaka, Dhaka, Bangladesh",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone Number",
      description: phone,
    },
    {
      icon: <FaEnvelope />,
      title: "Email Address",
      description: "masudahmed1313@gmail.com",
    },
    {
      icon: <FaClock />,
      title: "Opening Hours",
      description: "Always Open",
    },
  ];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
*New Laundry Order - Best Laundry*

Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Pickup Date: ${form.date}
Pickup Address: ${form.address}
Additional Message: ${form.message}
    `;

    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="bg-[#fff9f0] px-5 py-16 md:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-[#F4A548]/15 px-5 py-2 text-sm font-bold text-[#d9821c]">
            GET IN TOUCH
          </span>

          <h2 className="text-3xl font-extrabold text-[#252525] md:text-5xl">
            Contact{" "}
            <span className="text-[#F4A548]">
              Best Laundry
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
            Book your laundry service today! Fill out the form
            and let us take care of your clothes.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">

          {/* Left: Contact Information */}
          <div className="rounded-[28px] bg-white p-6 shadow-sm md:p-8">

            <h3 className="mb-2 text-2xl font-bold text-[#252525]">
              Contact Information
            </h3>

            <p className="mb-7 text-sm text-gray-500">
              Reach out to us anytime.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-2xl bg-[#fff9f0] p-4 transition hover:bg-[#fff0d9]"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F4A548] text-xl text-white shadow-lg shadow-orange-200">
                    {item.icon}
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-lg font-bold text-[#252525]">
                      {item.title}
                    </h4>

                    <p className="mt-1 break-words text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href={`tel:${phone}`}
                className="flex items-center justify-center gap-2 rounded-full bg-[#F4A548] px-5 py-4 font-bold text-white transition hover:bg-[#df8b2b]"
              >
                <FaPhoneAlt />
                Call Now
              </a>

              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#252525] px-5 py-4 font-bold text-white transition hover:bg-[#F4A548]"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp
              </a>
            </div>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-full border border-[#F4A548] px-5 py-3 font-semibold text-[#252525] transition hover:bg-[#F4A548] hover:text-white"
            >
              <FaFacebookF />
              Follow Us on Facebook
            </a>
          </div>

          {/* Right: Order Form */}
          <div className="rounded-[28px] bg-white p-6 shadow-sm md:p-8">

            <div className="mb-6">
              <span className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4A548] text-xl text-white">
                <FaTruck />
              </span>

              <h3 className="text-2xl font-bold text-[#252525]">
                Book Your Service
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Fill out the form to schedule your laundry pickup.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#252525]">
                  Your Name *
                </label>

                <div className="flex items-center rounded-xl border border-gray-200 bg-[#fffaf3] px-4 focus-within:border-[#F4A548]">
                  <FaUser className="text-[#F4A548]" />

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full bg-transparent px-3 py-3.5 text-sm outline-none"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#252525]">
                  Phone Number *
                </label>

                <div className="flex items-center rounded-xl border border-gray-200 bg-[#fffaf3] px-4 focus-within:border-[#F4A548]">
                  <FaPhoneAlt className="text-[#F4A548]" />

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="01XXXXXXXXX"
                    required
                    className="w-full bg-transparent px-3 py-3.5 text-sm outline-none"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#252525]">
                  Select Service *
                </label>

                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-[#fffaf3] px-4 py-3.5 text-sm outline-none focus:border-[#F4A548]"
                >
                  <option value="">Choose a service</option>
                  <option value="Wash & Fold">Wash & Fold</option>
                  <option value="Dry Cleaning">Dry Cleaning</option>
                  <option value="Ironing">Ironing</option>
                  <option value="Steam Press">Steam Press</option>
                  <option value="Household Laundry">Household Laundry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Pickup Date */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#252525]">
                  Pickup Date *
                </label>

                <div className="flex items-center rounded-xl border border-gray-200 bg-[#fffaf3] px-4 focus-within:border-[#F4A548]">
                  <FaCalendarAlt className="text-[#F4A548]" />

                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    
                    className="w-full bg-transparent px-3 py-3.5 text-sm outline-none"
                 required />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#252525]">
                  Pickup Address *
                </label>

                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Enter your pickup address"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-[#fffaf3] px-4 py-3.5 text-sm outline-none focus:border-[#F4A548]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#252525]">
                  Additional Message
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Any special instructions?"
                  rows="3"
                  className="w-full resize-none rounded-xl border border-gray-200 bg-[#fffaf3] px-4 py-3.5 text-sm outline-none focus:border-[#F4A548]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-[#F4A548] px-6 py-4 font-bold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-1 hover:bg-[#df8b2b]"
              >
                <FaPaperPlane />
                Submit Order via WhatsApp
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
