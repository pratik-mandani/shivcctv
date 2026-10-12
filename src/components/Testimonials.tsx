'use client';

import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Rajesh Shah',
      role: 'Textile Showroom Owner',
      location: 'Ring Road, Surat',
      rating: 5,
      comment: 'Shiv CCTV installed an 8-camera setup in our two-story showroom. The wiring is totally concealed inside the false ceiling without damaging any decor. Now I monitor cash counter and customer entries directly on my phone even when I am traveling.',
      setup: '8-Camera Hikvision Setup'
    },
    {
      name: 'Hareshbhai Patel',
      role: 'Homeowner',
      location: 'Science City, Ahmedabad',
      rating: 5,
      comment: 'Super fast service! Contacted them in the morning on WhatsApp, technician arrived in the afternoon for site survey, and by next evening all 4 cameras were live on my phone. The Color Night Vision at gate is incredibly clear.',
      setup: '4-Camera ColorVu Home Setup'
    },
    {
      name: 'Vipul Solanki',
      role: 'Engineering Workshop & Godown',
      location: 'GIDC Industrial Zone',
      rating: 5,
      comment: 'Very professional team. They gave us genuine CP Plus 4K cameras with 2TB hard disk. We get motion detection alerts on mobile during night hours. Best price and honest advice.',
      setup: 'Commercial 4K Security Kit'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-blue-600 font-extrabold text-xs sm:text-sm tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Real Customer Experiences
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted By Over 1,200+ Homes & Businesses
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            See what our customers have to say about our workmanship and after-sales service.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(r.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-500 ml-1">5.0</span>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{r.comment}"
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 text-sm">{r.name}</div>
                  <div className="text-xs text-slate-500">{r.role} • {r.location}</div>
                  <div className="text-[11px] font-semibold text-blue-600 mt-1">{r.setup}</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0" title="Verified Customer">
                  <CheckCircle className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl shrink-0">
              100%
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">100% Satisfaction & Service Guarantee</div>
              <div className="text-xs text-slate-500">Free replacement for any defective part under 2-year warranty period.</div>
            </div>
          </div>
          <a
            href="https://wa.me/918320561064?text=Hello%20Shiv%20CCTV,%20I%20want%20to%20discuss%20CCTV%20installation%20for%20my%20place."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors shrink-0"
          >
            Ask Questions on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
