'use client';

import React from 'react';
import Image from 'next/image';
import { Check, MessageSquare, Phone, ShieldCheck, Zap } from 'lucide-react';

interface PackageItem {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  isPopular?: boolean;
  image: string;
  idealFor: string;
  features: string[];
  warranty: string;
  whatsappMsg: string;
}

const packages: PackageItem[] = [
  {
    id: 'home-2-cam',
    title: 'Home Protection Kit (2 Cameras)',
    subtitle: 'Ideal for 1-2 BHK flats, bungalows, and home entrances',
    image: '/images/home-kit.jpg',
    idealFor: 'Flats, Independent Homes, Small Clinics',
    warranty: '2 Years Replacement Warranty',
    features: [
      '2x HD Smart Day & Night Vision Dome Cameras',
      'Mobile Phone Live View App (iOS & Android)',
      '2-Way Audio & High-Sensitivity Mic',
      'Power Adapter & Standard Cabling',
      'Instant Motion Detection Alerts on Mobile',
      'Professional Clean Installation Support'
    ],
    whatsappMsg: 'Hello Shiv CCTV, I am interested in the 2-Camera Home Security Kit. Please provide complete pricing and availability.'
  },
  {
    id: 'business-4-cam',
    title: 'Shop & Office Kit (4 Cameras)',
    subtitle: 'Complete 360° security for retail shops, offices & godowns',
    badge: 'MOST POPULAR FOR BUSINESS',
    isPopular: true,
    image: '/images/business-kit.jpg',
    idealFor: 'Shops, Showrooms, Offices, Restaurants, Garages',
    warranty: '2 Years On-Site Comprehensive Warranty',
    features: [
      '4x Weatherproof HD Bullet & Dome Cameras',
      '4-Channel High Performance DVR / NVR Unit',
      '500GB / 1TB Surveillance Grade Hard Drive',
      'Full Color Night Vision in Complete Darkness',
      'Continuous 15-30 Days Video Recording',
      'Multi-User Smartphone Streaming App',
      'Clean Concealed Wiring & Free Onsite Fitting'
    ],
    whatsappMsg: 'Hello Shiv CCTV, I am interested in your Most Popular 4-Camera Shop & Office Kit. Please send the best price offer.'
  },
  {
    id: 'commercial-8-cam',
    title: 'Enterprise & Villa Kit (8 Cameras)',
    subtitle: 'Heavy-duty 4K surveillance for large properties & factories',
    badge: 'MAXIMUM SECURITY',
    image: '/images/commercial-kit.jpg',
    idealFor: 'Factories, Warehouses, Schools, Large Bungalows',
    warranty: '2 Years Comprehensive Warranty + Priority Support',
    features: [
      '8x Ultra HD 4K Weatherproof IP / HD Cameras',
      '8-Channel High Speed Network NVR / DVR Box',
      '1TB / 2TB Surveillance Hard Disk Included',
      'Smart AI Human & Vehicle Motion Recognition',
      'Crystal Clear Night Vision up to 30+ Meters',
      'Multi-Screen TV / Monitor Live Output Support',
      'Dedicated Installation Engineer & Free Setup'
    ],
    whatsappMsg: 'Hello Shiv CCTV, I need details and quote for the 8-Camera Enterprise CCTV System.'
  }
];

export default function Packages() {
  const triggerTracking = (pkgName: string) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', { content_name: pkgName });
    }
  };

  return (
    <section id="packages" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <Zap className="w-4 h-4 text-blue-600" /> Complete Ready-to-Install Packages
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Select The Right CCTV Package For Your Space
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            All kits include genuine CP Plus / Hikvision branded equipment, surveillance hard drives, professional concealed wiring, mobile app configuration, and 2-year on-site service warranty.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl overflow-hidden bg-white flex flex-col justify-between transition-all duration-300 card-hover ${
                pkg.isPopular
                  ? 'border-2 border-blue-600 shadow-xl shadow-blue-500/10 ring-4 ring-blue-50'
                  : 'border border-slate-200 shadow-md'
              }`}
            >
              <div>
                {/* Popular Badge */}
                {pkg.badge && (
                  <div
                    className={`py-1.5 px-4 text-center text-xs font-extrabold tracking-wider uppercase text-white ${
                      pkg.isPopular ? 'bg-blue-600' : 'bg-slate-800'
                    }`}
                  >
                    {pkg.badge}
                  </div>
                )}

                {/* Package Product Image */}
                <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-lg">
                    {pkg.idealFor}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-slate-900">{pkg.title}</h3>
                  <p className="mt-1 text-sm text-slate-500 leading-snug">{pkg.subtitle}</p>

                  <div className="mt-4 p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center gap-2 text-xs font-semibold text-emerald-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{pkg.warranty}</span>
                  </div>

                  {/* Feature Bullets */}
                  <div className="mt-6 space-y-3">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Included in this setup:
                    </div>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-2">
                <a
                  href={`https://wa.me/918320561064?text=${encodeURIComponent(pkg.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => triggerTracking(pkg.title)}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                    pkg.isPopular
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Get WhatsApp Price & Offer</span>
                </a>

                <a
                  href="tel:+918320561064"
                  className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>Or Call for Fast Consultation</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solution Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">Need a Custom Setup (12+ Cameras, PTZ, or Solar CCTV)?</h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
              We design custom camera layouts for residential societies, factories, agricultural farmhouses, and multi-floor commercial complexes with customized optical cabling.
            </p>
          </div>
          <a
            href="https://wa.me/918320561064?text=Hello%20Shiv%20CCTV,%20I%20need%20a%20customized%20CCTV%20setup%20quotation%20with%20free%20site%20visit."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg flex items-center gap-2 transition-all hover:scale-105"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Book Custom Site Visit</span>
          </a>
        </div>

      </div>
    </section>
  );
}
