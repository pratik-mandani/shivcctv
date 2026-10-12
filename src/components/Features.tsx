'use client';

import React from 'react';
import Image from 'next/image';
import { Smartphone, Bell, Moon, Mic, HardDrive, CheckCircle } from 'lucide-react';
import { assetUrl } from '@/utils/asset';

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-extrabold text-xs sm:text-sm tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Next-Gen Surveillance Technology
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Smart Features Built To Protect What Matters
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Modern security is no longer blurry black-and-white clips. Shiv CCTV equips your premises with crystal-clear 4K clarity, AI detection, and instant phone controls.
          </p>
        </div>

        {/* Feature Spotlight: Full-Color Night Vision */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-6 sm:p-10 lg:p-12 text-white border border-slate-800 shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Moon className="w-3.5 h-3.5 text-blue-400" /> ColorVu / Full-Color Night Vision
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                See Every Detail in Vivid Color, Even in Pitch Darkness
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Traditional infrared cameras only show grainy black & white shapes at night. Our latest Color Night Vision cameras use high-sensitivity sensors and warm supplemental lights to capture clear color footage of faces, clothing colors, and vehicle number plates 24/7.
              </p>

              <div className="space-y-3 pt-2 text-sm text-slate-200">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bright color imaging up to 30+ meters at midnight</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Vehicle number plate & face recognition clarity</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Weatherproof IP67 rated body for rain, dust & intense sun</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/918320561064?text=Hello%20Shiv%20CCTV,%20I%20am%20interested%20in%20Color%20Night%20Vision%20cameras."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all"
                >
                  <span>Inquire About Night Vision Cameras</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700 shadow-xl group">
                <Image
                  src={assetUrl('/images/night-vision.jpg')}
                  alt="Shiv CCTV Color Night Vision Technology"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Active Night Color Mode
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Feature Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-blue-50/50 hover:border-blue-200 transition-all card-hover">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-md shadow-blue-500/20">
              <Smartphone className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Mobile Live Streaming</h4>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Watch live feeds and playback recordings directly from your phone while traveling, at the office, or at home.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-blue-50/50 hover:border-blue-200 transition-all card-hover">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-4 shadow-md shadow-indigo-500/20">
              <Bell className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">AI Human & Motion Alert</h4>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Receive smart push notifications on your phone the moment unusual activity or movement is detected after hours.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-blue-50/50 hover:border-blue-200 transition-all card-hover">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-md shadow-emerald-500/20">
              <Mic className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">2-Way Audio & Mic</h4>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Hear conversations clearly and talk back through the camera speaker to delivery persons, visitors, or intruders.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-blue-50/50 hover:border-blue-200 transition-all card-hover">
            <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center mb-4 shadow-md shadow-amber-500/20">
              <HardDrive className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Secure 30-Day Backup</h4>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Specialized 24/7 surveillance hard drives provide reliable, uninterrupted recording with easy search and export.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
