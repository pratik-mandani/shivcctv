'use client';

import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { trackPhoneConversion, trackWhatsAppConversion } from '@/utils/analytics';

export default function MobileStickyBar() {
  const handleWhatsApp = () => {
    trackWhatsAppConversion('Mobile Sticky Bar WhatsApp');
  };

  const handleCall = () => {
    trackPhoneConversion();
  };

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-slate-200 p-2.5 px-3 shadow-2xl flex items-center gap-2">
      {/* Call Button */}
      <a
        href="tel:+918320561064"
        onClick={handleCall}
        className="flex-1 py-3 px-3 rounded-xl bg-slate-900 active:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md"
      >
        <Phone className="w-4 h-4 text-blue-400 shrink-0" />
        <span>Call Expert</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918320561064?text=Hello%20Shiv%20CCTV,%20I%20am%20interested%20in%20CCTV%20Installation.%20Please%20share%20packages%20and%20pricing."
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsApp}
        className="flex-[1.4] py-3 px-3 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-emerald-600/30"
      >
        <MessageSquare className="w-4 h-4 fill-white shrink-0" />
        <span>WhatsApp Quote</span>
      </a>
    </div>
  );
}
