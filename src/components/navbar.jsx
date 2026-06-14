"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    {href: "/about", label: "About"},
    {href: "/skills", label: "Skills"},
    {href: "/projects", label: "Projects"},
    {href: "/contacts", label: "Contacts"},
  ]
  return (
    <nav className="w-full bg-gray-700 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1
          className="text-xl md:text-2xl font-bold font-[family-name:var(--font-integral-cf)]"
        >
          Adunade Asiwaju
        </h1>

        {/* Desktop Menu */}
        <div className="hidden  md:flex gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:underline decoration-3 hover:decoration-red-400 font-medium transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden p-1 rounded-md hover:bg-gray-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 flex flex-col gap-5 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:underline decoration-3 hover:decoration-red-400"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
