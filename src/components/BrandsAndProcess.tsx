'use client';

import React from 'react';
import { PhoneCall, FileText, Wrench, ShieldCheck } from 'lucide-react';

export default function BrandsAndProcess() {
  const steps = [
    {
      num: '01',
      icon: PhoneCall,
      title: 'Send Requirement or Call',
      desc: 'Connect with us on WhatsApp or call +91 832 056 1064. Tell us whether you need security for a home, shop, or factory.',
    },
    {
      num: '02',
      icon: FileText,
      title: 'Free Site Visit & Best Quote',
      desc: 'Our security engineer inspects your location, assesses blind spots, and provides an unbeatable discounted quotation.',
    },
    {
      num: '03',
      icon: Wrench,
      title: 'Clean & Prompt Installation',
      desc: 'We install high-quality cameras with neat concealed wiring, weather-sealed joints, and professional alignment.',
    },
    {
      num: '04',
      icon: ShieldCheck,
      title: 'App Setup & 2-Year Warranty',
      desc: 'We configure the live streaming app on your family or staff phones, show you how to use it, and handover the warranty card.',
    },
  ];

  const brands = [
    { name: 'CP PLUS', tag: 'World-Class Surveillance' },
    { name: 'HIKVISION', tag: 'Global Security Leader' },
    { name: 'DAHUA TECHNOLOGY', tag: 'AI Vision Solutions' },
    { name: 'UNIVIEW (UNV)', tag: 'Ultra 4K IP Systems' },
    { name: 'HONEYWELL', tag: 'Enterprise Commercial Security' },
    { name: 'SEAGATE SKYHAWK', tag: 'Dedicated 24/7 Surveillance Drives' },
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brands Section */}
        <div className="text-center mb-16">
          <div className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-4">
            Authorized Solutions & Genuine Hardware Partners
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {brands.map((b, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center hover:border-blue-300 hover:bg-blue-50/30 transition-all text-center"
              >
                <div className="font-black text-slate-800 text-sm tracking-wider">{b.name}</div>
                <div className="text-[10px] text-slate-500 mt-1">{b.tag}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Step Process Section */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-blue-600 font-extrabold text-xs sm:text-sm tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Simple 4-Step Process
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 tracking-tight">
              How Simple It Is To Secure Your Premises
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              From inquiry to live phone streaming in less than 24-48 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((st, i) => {
              const Icon = st.icon;
              return (
                <div key={i} className="relative bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between card-hover">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-3xl font-black text-slate-200">{st.num}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{st.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{st.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
