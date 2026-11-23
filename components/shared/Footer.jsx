
import React from 'react'
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Clock
} from 'lucide-react'

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa'

import Image from 'next/image'

const Footer = () => {

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Contact', id: 'contact' },
  ]

  const services = [
    'Washing & Folding',
    'Dry Cleaning',
    'Ironing Service',
    'Express Laundry',
    'Stain Removal',
  ]

  return (
    <footer className="bg-[#F4A548] text-gray-300">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>

            <a href="#home" className="flex items-center gap-2 mb-5">

              <Image
                src="/logo.png"
                alt="Best Laundry"
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
              />

              <span className="text-2xl font-bold text-white">
                <span className="text-red-600">Best</span> Laundry
              </span>

            </a>

            <p className="text-black leading-7 text-sm">
              We provide professional laundry and dry cleaning
              services to keep your clothes fresh, clean and
              looking their best.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">

              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-red-600 transition duration-300"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-red-600 transition duration-300"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-red-600 transition duration-300"
              >
                <FaTwitter size={18} />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-white text-lg font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-black hover:text-red-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-white text-lg font-semibold mb-6">
              Our Services
            </h3>

            <ul className="space-y-3">

              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-black hover:text-red-600 transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-white text-lg font-semibold mb-6">
              Contact Us
            </h3>

            <ul className="space-y-5">

              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-red-600 shrink-0 mt-1" />
                <span className="text-black text-sm leading-6">
                  Your Address, Dhaka, Bangladesh
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={20} className="text-red-600 shrink-0" />
                <a
                  href="tel:+8801234567890"
                  className="text-black text-sm hover:text-red-600 transition"
                >
                  +880 1234-567890
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={20} className="text-red-600 shrink-0" />
                <a
                  href="mailto:info@bestlaundry.com"
                  className="text-black text-sm hover:text-red-600 transition"
                >
                  info@bestlaundry.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Clock size={20} className="text-red-600 shrink-0" />
                <span className="text-black text-sm">
                  Mon - Sat: 9 AM - 9 PM
                </span>
              </li>

            </ul>

          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-14 border-t border-black/20 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="text-center md:text-left">

            <h3 className="text-white text-xl font-semibold">
              Fresh Clothes, Happy Life!
            </h3>

            <p className="text-black text-sm mt-2">
              Let us take care of your laundry.
            </p>

          </div>

          <a
            href="#contact"
            className="bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-md font-medium transition duration-300"
          >
            Get In Touch
          </a>

        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-black/20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-black text-sm text-center">
            © 2026 Best Laundry. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 text-sm text-black hover:text-red-600 transition duration-300"
          >
            Back to Top
            <ArrowUp size={16} />
          </a>

        </div>

      </div>

    </footer>
  )
}

export default Footer
