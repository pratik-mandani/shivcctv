'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, Phone, MessageSquare, CheckCircle2, ArrowRight, Smartphone, Wifi } from 'lucide-react';
import { assetUrl } from '@/utils/asset';
import { trackPhoneConversion, trackWhatsAppConversion } from '@/utils/analytics';

export default function Hero() {
  const [quickCam, setQuickCam] = useState('4 Cameras Setup');
  const [quickPhone, setQuickPhone] = useState('');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickPhone) {
      alert('Please enter your mobile number.');
      return;
    }

    trackWhatsAppConversion(`Quick Quote: ${quickCam}`);

    const msg = `🚨 *New Quick Inquiry - Shiv CCTV*\n📹 *Setup Selected:* ${quickCam}\n📱 *Mobile Number:* ${quickPhone}\n\nPlease share price quotation and free site visit details.`;
    const waUrl = `https://wa.me/918320561064?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-600/15 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Certified CCTV Installation & Smart Security</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Protect Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">Home & Business</span> With Smart CCTV
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Watch live video directly on your smartphone anywhere in the world. Full HD & 4K Color Night Vision, smart motion alarms, professional clean installation, and 2 years onsite warranty.
            </p>

            {/* Quick Benefits Bullet Points */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0 pt-2 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Live Mobile App Monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Color Night Vision (Day & Night)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>2-Year Comprehensive Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Free On-Site Inspection</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="https://wa.me/918320561064?text=Hello%20Shiv%20CCTV,%20I%20am%20interested%20in%20CCTV%20Installation.%20Please%20send%20packages%20and%20offers."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppConversion('Hero WhatsApp Quote Button')}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-3 transition-all hover:scale-105"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Get Instant Quote on WhatsApp</span>
              </a>

              <a
                href="tel:+918320561064"
                onClick={trackPhoneConversion}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-base flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-5 h-5 text-blue-400" />
                <span>Call +91 832 056 1064</span>
              </a>
            </div>

            {/* Quick 1-Step Quote Widget for Meta Ads traffic */}
            <div className="pt-4">
              <form
                onSubmit={handleQuickSubmit}
                className="bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl border border-slate-700/80 shadow-2xl max-w-xl mx-auto lg:mx-0"
              >
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Quick Estimate - Sent Instantly to WhatsApp
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <select
                    value={quickCam}
                    onChange={(e) => setQuickCam(e.target.value)}
                    className="bg-slate-900 border border-slate-700 text-white text-sm rounded-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="2 Cameras Home Setup">2 Cameras (Home Set)</option>
                    <option value="4 Cameras Shop Setup">4 Cameras (Shop Set - Popular)</option>
                    <option value="8 Cameras Commercial Setup">8 Cameras (Commercial Set)</option>
                    <option value="Free Site Survey Booking">Book Free Site Survey</option>
                  </select>

                  <input
                    type="tel"
                    placeholder="Enter WhatsApp Number"
                    value={quickPhone}
                    onChange={(e) => setQuickPhone(e.target.value)}
                    className="flex-1 bg-slate-900 border border-slate-700 text-white placeholder-slate-400 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />

                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-3 rounded-xl flex items-center justify-center gap-2 shrink-0 transition-colors shadow-md"
                  >
                    <span>Check Price</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>

            {/* Social Trust Snippet */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 border-2 border-slate-900 flex items-center justify-center text-[10px] text-white font-bold"
                  >
                    ★
                  </div>
                ))}
              </div>
              <div>
                <span className="text-white font-bold">4.9 / 5 Rating</span> from 1,200+ Satisfied Clients across Gujarat
              </div>
            </div>

          </div>

          {/* Right Column: Hero Graphic with Real-time App Elements */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-blue-900/30 group">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full">
                <Image
                  src={assetUrl('/images/hero-banner.jpg')}
                  alt="Shiv CCTV Security Camera with Mobile App"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Pill: Live Status */}
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-slate-700 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                <span className="text-xs font-semibold text-white tracking-wide">LIVE 4K ULTRA HD</span>
              </div>

              {/* Floating Pill: AI Motion Alert */}
              <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                <Wifi className="w-3.5 h-3.5 text-white" />
                <span className="text-xs font-semibold text-white">AI Motion Detect</span>
              </div>

              {/* Bottom Card Overlay inside Image */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Phone App Connected</div>
                    <div className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Active 24/7 Remote Stream
                    </div>
                  </div>
                </div>
                <a
                  href="https://wa.me/918320561064?text=Hello%20Shiv%20CCTV,%20I%20want%20to%20know%20about%20mobile%20app%20view%20CCTV%20systems."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                >
                  Inquire
                </a>
              </div>
            </div>

            {/* Floating Decorative Stats */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white text-slate-900 p-3.5 rounded-2xl shadow-xl border border-slate-200 items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                ✓
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Trusted Assurance</div>
                <div className="text-sm font-extrabold text-slate-900">2-Year Replacement Warranty</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
