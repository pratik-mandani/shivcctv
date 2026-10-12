'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do I need Wi-Fi or Internet for CCTV cameras to record?',
      a: 'No! The CCTV cameras and DVR/NVR system record 24/7 directly onto the internal surveillance hard disk without requiring any internet connection. You only need an internet/Wi-Fi connection if you wish to watch live camera video remotely on your mobile phone while away from home or office.',
    },
    {
      q: 'Can I view multiple cameras on my phone from anywhere in the world?',
      a: 'Yes, absolutely. Our technician sets up the official mobile app (like Hik-Connect, gCMOB, DMSS) on your smartphone (iOS or Android). You and your family members can view live feeds, hear audio, and playback past recordings from any location.',
    },
    {
      q: 'How many days of recording will be saved on the hard drive?',
      a: 'With standard 500GB, 1TB, or 2TB surveillance hard drives, recordings typically last 15 to 30+ days depending on camera resolution and motion-recording settings. When the drive gets full, it automatically overwrites the oldest recordings in a continuous loop.',
    },
    {
      q: 'What kind of warranty does Shiv CCTV provide?',
      a: 'We provide a 2-Year On-Site Comprehensive Warranty on all cameras, DVR/NVR recording units, and power supply adapters. If any hardware issue occurs, our technician visits your premises to repair or replace the unit under warranty.',
    },
    {
      q: 'How much time does the installation take?',
      a: 'Standard home or shop setups (2 to 4 cameras) are usually completed within 3 to 5 hours on the same day. Larger setups (8+ cameras) are completed within 1 to 2 days with clean, concealed wiring.',
    },
    {
      q: 'Is the site survey and quotation completely free?',
      a: 'Yes, 100% free! Our security expert will visit your property to identify critical angles, blind spots, and cable pathways, and provide an honest estimate without any commitment.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 border border-blue-200">
            <HelpCircle className="w-4 h-4 text-blue-600" /> Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Everything you need to know about CCTV camera packages and installation.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-colors bg-slate-50/50"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-blue-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center p-6 bg-slate-50 rounded-2xl border border-slate-200">
          <div className="text-sm font-semibold text-slate-800">Have a specific question not answered here?</div>
          <p className="text-xs text-slate-500 mt-1">Our security consultant is available on WhatsApp right now.</p>
          <a
            href="https://wa.me/918320561064?text=Hello%20Shiv%20CCTV,%20I%20have%20a%20question%20regarding%20CCTV%20installation."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Chat Directly on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
