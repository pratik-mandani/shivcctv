'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, MessageSquare, Shield, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800 pb-20 lg:pb-8 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: About & Logo */}
          <div className="space-y-4">
            <div className="relative w-44 h-12">
              <Image
                src="/images/logo.png"
                alt="Shiv CCTV & Security"
                fill
                className="object-contain object-left brightness-200 contrast-200 invert"
              />
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Your trusted partner for smart CCTV surveillance, IP 4K camera systems, and commercial security installations with 2-year on-site warranty.
            </p>
            <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold">
              <Shield className="w-4 h-4 text-blue-400" />
              <span>Certified Installation Specialists</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Our Security Solutions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#packages" className="hover:text-blue-400 transition-colors">
                  Home CCTV Security (2 & 4 Cameras)
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-blue-400 transition-colors">
                  Retail Shop & Showroom Surveillance
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-blue-400 transition-colors">
                  Industrial Factory & Warehouse 8-Camera Set
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-400 transition-colors">
                  Full Color Night Vision Setup
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-400 transition-colors">
                  Mobile App 24/7 Live Monitoring
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Contact & Support
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <a
                  href="tel:+918320561064"
                  className="flex items-center gap-2.5 text-white font-semibold hover:text-blue-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>+91 832 056 1064</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918320561064?text=Hello%20Shiv%20CCTV,%20I%20have%20an%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-emerald-400 font-semibold hover:underline"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>WhatsApp Direct Chat</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Mon - Sun: 9:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick WhatsApp CTA Box */}
          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-3">
            <div className="text-white font-bold text-sm">Need Fast Assistance?</div>
            <p className="text-xs text-slate-400">
              Send us your location on WhatsApp to check same-day installation availability.
            </p>
            <a
              href="https://wa.me/918320561064?text=Hello%20Shiv%20CCTV,%20I%20am%20interested%20in%20CCTV%20Installation."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Shiv CCTV & Security. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Free On-Site Survey</span>
            <span>•</span>
            <span>2-Year Warranty</span>
            <span>•</span>
            <span>Authorized Brands</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
