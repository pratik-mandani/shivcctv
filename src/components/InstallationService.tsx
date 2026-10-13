'use client';

import React from 'react';
import Image from 'next/image';
import { Wrench, Award, Clock, MessageSquare, Phone } from 'lucide-react';
import { assetUrl } from '@/utils/asset';
import { trackPhoneConversion, trackWhatsAppConversion } from '@/utils/analytics';

export default function InstallationService() {
  const points = [
    {
      title: 'Neat & Concealed Cabling',
      desc: 'Our certified technicians ensure zero messy or dangling wires. All wiring is cleanly routed through casing or pipes to preserve the aesthetic of your property.'
    },
    {
      title: '100% Genuine Boxed Brands',
      desc: 'We strictly provide genuine, sealed box cameras and recorders with official manufacturer serial numbers from CP Plus, Hikvision, and Dahua.'
    },
    {
      title: 'Free On-Site Survey & Consultation',
      desc: 'Not sure how many cameras you need or where the blind spots are? Our security consultant visits your site free of charge to plan the ideal coverage.'
    },
    {
      title: '2-Year Direct On-Site Warranty',
      desc: 'Enjoy total peace of mind. If any camera, power adapter, or DVR stops working, our team visits your location for repair or replacement.'
    }
  ];

  return (
    <section id="installation" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image of Technician Service */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-700 shadow-2xl group">
              <Image
                src={assetUrl('/images/technician-service.jpg')}
                alt="Shiv CCTV Certified Installation Technician at Work"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Expert Technician Team</div>
                    <div className="text-xs text-slate-300">Clean fittings • Same-day service • Proper handover</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-2xl shadow-xl border border-blue-400/40 items-center gap-3">
              <Clock className="w-6 h-6 text-white" />
              <div>
                <div className="text-lg font-extrabold leading-none">Fast Fitting</div>
                <div className="text-xs text-blue-100 mt-1">Within 24 Hours</div>
              </div>
            </div>
          </div>

          {/* Right Column: Why Choose Us Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Wrench className="w-3.5 h-3.5" /> Workmanship & Trust
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Homeowners & Business Owners Trust <span className="text-blue-400">Shiv CCTV</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Buying CCTV cameras is simple, but poor wiring or wrong camera angles leave critical blind spots and short circuits. At Shiv CCTV, we treat your property with utmost care and ensure every angle is shielded.
            </p>

            <div className="space-y-4 pt-2">
              {points.map((pt, index) => (
                <div key={index} className="flex items-start gap-3.5 bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/60">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">{pt.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-0.5 leading-relaxed">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/918320561064?text=Hello%20Shiv%20CCTV,%20I%20would%20like%20to%20schedule%20a%20Free%20Site%20Survey%20for%20CCTV%20installation."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppConversion('Installation Free Site Survey')}
                className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Book Free Site Survey On WhatsApp</span>
              </a>

              <a
                href="tel:+918320561064"
                onClick={trackPhoneConversion}
                className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Call +91 832 056 1064</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
