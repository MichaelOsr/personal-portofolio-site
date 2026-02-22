import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Icon standar
import { Button } from './ui/button';


const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Me', href: '#aboutme' },
  { name: 'Skills', href: '#skills' },
  { name: 'Portofolio', href: '#portofolio' },
  { name: 'Experience', href: '#experience' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-slate-700 to-slate-900 sticky top-0 w-full backdrop-blur-lg z-50 border-b border-gray-950">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="font-bold text-xl text-slate-50">Dukun.Coding</div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-50 hover:text-black transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 p-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} // Tutup menu saat link diklik
              className="block text-slate-800 hover:text-black"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}