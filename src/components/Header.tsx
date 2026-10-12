'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, MessageSquare, Shield, Menu, X, Clock } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact');
    }
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-slate-900 text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span className="flex items-center gap-1.5 text-blue-400 font-medium">
              <Shield className="w-3.5 h-3.5" /> 100% Genuine Branded Equipment
            </span>
            <span className="hidden md:inline-block text-slate-500">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" /> Free Same-Day Site Inspection
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+918320561064"
              className="hover:text-blue-400 transition-colors flex items-center gap-1.5 font-semibold text-white"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" /> +91 832 056 1064
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className="relative w-40 sm:w-48 h-12">
                <Image
                  src="/images/logo.png"
                  alt="Shiv CCTV & Security"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
              <a href="#packages" className="hover:text-blue-600 transition-colors">
                Packages & Offers
              </a>
              <a href="#features" className="hover:text-blue-600 transition-colors">
                Features
              </a>
              <a href="#installation" className="hover:text-blue-600 transition-colors">
                Why Us
              </a>
              <a href="#lead-form" className="hover:text-blue-600 transition-colors">
                Get Quote
              </a>
              <a href="#faqs" className="hover:text-blue-600 transition-colors">
                FAQ
              </a>
            </nav>

            {/* Direct Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:+918320561064"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 font-semibold text-sm hover:bg-slate-100 transition-all shadow-sm"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/918320561064?text=Hello%20Shiv%20CCTV,%20I%20am%20interested%20in%20CCTV%20Installation.%20Please%20share%20packages%20and%20pricing."
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp Quote</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3">
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-800 font-medium hover:text-blue-600"
            >
              Packages & Pricing
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-800 font-medium hover:text-blue-600"
            >
              Smart Features
            </a>
            <a
              href="#installation"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-800 font-medium hover:text-blue-600"
            >
              Installation Quality
            </a>
            <a
              href="#lead-form"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-800 font-medium hover:text-blue-600"
            >
              Book Free Site Visit
            </a>
            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-800 font-medium hover:text-blue-600"
            >
              Frequently Asked Questions
            </a>
            <div className="pt-3 flex flex-col gap-2">
              <a
                href="https://wa.me/918320561064?text=Hello%20Shiv%20CCTV,%20I%20am%20interested%20in%20CCTV%20Installation."
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-bold"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                Chat on WhatsApp
              </a>
              <a
                href="tel:+918320561064"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-300 text-slate-800 font-semibold"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                Call +91 832 056 1064
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
