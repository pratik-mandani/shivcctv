'use client';

import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { trackWhatsAppConversion } from '@/utils/analytics';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    trackWhatsAppConversion('Floating WhatsApp Widget');
    window.open(
      'https://wa.me/918320561064?text=Hello%20Shiv%20CCTV,%20I%20am%20interested%20in%20CCTV%20Installation.%20Please%20share%20details.',
      '_blank'
    );
  };

  return (
    <div className="hidden sm:block fixed bottom-6 right-6 z-50">
      <div className="relative flex items-center">
        {/* Tooltip speech bubble */}
        {showTooltip && (
          <div className="absolute right-full mr-3 bg-white text-slate-800 text-xs font-semibold py-2 px-3 rounded-xl shadow-xl border border-slate-200 whitespace-nowrap flex items-center gap-2">
            <span>💬 Need quick CCTV quotation? Chat with us!</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-slate-400 hover:text-slate-700"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* WhatsApp Round Button */}
        <button
          onClick={handleClick}
          aria-label="Chat with Shiv CCTV on WhatsApp"
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 relative group ring-4 ring-emerald-500/20"
        >
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></span>
          <MessageSquare className="w-7 h-7 fill-white text-white" />
        </button>
      </div>
    </div>
  );
}
