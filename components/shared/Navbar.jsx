
'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Pricing', id: 'Pricing' },
    { name: 'Contact', id: 'contact' },
  ]

  // Detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = 'home'

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id)

        if (section && window.scrollY >= section.offsetTop - 150) {
          currentSection = link.id
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu
  const handleLinkClick = (id) => {
    setActiveSection(id)
    setIsOpen(false)
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={160} height={160}
              className="w-30 h-30 object-contain"
            />
            <span className="text-3xl font-bold text-gray-800">
              <span className='text-red-600'>Best</span> Laundry
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`font-medium transition-colors duration-200 ${
                  activeSection === link.id
                    ? 'text-red-600'
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/50 transition-all duration-300 md:hidden ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      />

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 max-w-[85vw] bg-white shadow-xl
        transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >

        {/* Menu Header */}
        <div className="flex items-center justify-between p-5 border-b">

          <a href="#home" onClick={() => handleLinkClick('home')}>
            <Image
              src="/logo.png"
              alt="Logo"
              width={160} height={160}
              className="object-contain"
            />
          </a>

          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X size={26} />
          </button>

        </div>

        {/* Mobile Links */}
        <div className="flex flex-col p-5 gap-6">

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleLinkClick(link.id)}
              className={`text-lg font-medium transition-colors duration-200 ${
                activeSection === link.id
                  ? 'text-red-600'
                  : 'text-gray-700 hover:text-red-600'
              }`}
            >
              {link.name}
            </a>
          ))}

        </div>
      </div>
    </nav>
  )
}

export default Navbar
