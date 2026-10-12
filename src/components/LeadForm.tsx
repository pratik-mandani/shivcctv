'use client';

import React, { useState } from 'react';
import { Phone, MessageSquare, CheckCircle, ShieldCheck, MapPin, User } from 'lucide-react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    propertyType: 'Home / Apartment',
    cameraCount: '4 Cameras Set (Most Popular)',
    city: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone || !formData.name) {
      alert('Please enter your name and phone number.');
      return;
    }

    // Trigger Meta Pixel Lead event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Lead Form Submission',
        property_type: formData.propertyType,
        camera_count: formData.cameraCount,
      });
    }

    // Pre-format message for WhatsApp
    const message = `🚨 *NEW CCTV INQUIRY - SHIV CCTV* 🚨\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📱 *Mobile / WhatsApp:* ${formData.phone}\n` +
      `🏠 *Property Type:* ${formData.propertyType}\n` +
      `📹 *Camera Setup:* ${formData.cameraCount}\n` +
      `📍 *City / Area:* ${formData.city || 'Not specified'}\n` +
      `💬 *Note / Requirement:* ${formData.notes || 'Interested in pricing and site visit'}\n\n` +
      `Please provide estimated cost, discount offer, and site survey schedule.`;

    const whatsappUrl = `https://wa.me/918320561064?text=${encodeURIComponent(message)}`;
    
    setSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="lead-form" className="py-20 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Left Info Panel */}
            <div className="md:col-span-5 bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 p-8 sm:p-10 text-white flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold tracking-wider uppercase mb-4">
                  <ShieldCheck className="w-3.5 h-3.5" /> Direct Inquiry
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Get a Free Custom Quote on WhatsApp
                </h3>

                <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                  Fill out this quick form to receive discounted package pricing, catalog, and book a free on-site survey without obligation.
                </p>

                <div className="mt-8 space-y-4 text-sm text-slate-200">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Instant quotation within 15 minutes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Zero hidden charges or surprise costs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>100% Genuine Hikvision & CP Plus kits</span>
                  </div>
                </div>
              </div>

              {/* Direct Call Quick Link */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Prefer to speak directly?
                </div>
                <a
                  href="tel:+918320561064"
                  className="mt-2 flex items-center gap-2 text-white font-bold text-lg hover:text-blue-400 transition-colors"
                >
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <span>+91 832 056 1064</span>
                </a>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="md:col-span-7 p-8 sm:p-10">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Inquiry Sent Successfully!</h4>
                  <p className="text-slate-600 text-sm max-w-sm mx-auto">
                    Your inquiry has been directed to our WhatsApp helpline. Our CCTV expert will reply immediately with detailed quotes.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-blue-600 hover:underline pt-2"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Patel"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      WhatsApp / Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98250 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Property Type
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-3 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      >
                        <option value="Home / Apartment">Home / Apartment</option>
                        <option value="Independent Bungalow / Villa">Independent Villa</option>
                        <option value="Retail Shop / Store">Retail Shop</option>
                        <option value="Office / Commercial Space">Office / Corporate</option>
                        <option value="Factory / Godown / Warehouse">Factory / Godown</option>
                        <option value="Other / Society Campus">Society / Others</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Requirement Setup
                      </label>
                      <select
                        value={formData.cameraCount}
                        onChange={(e) => setFormData({ ...formData, cameraCount: e.target.value })}
                        className="w-full px-3 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      >
                        <option value="2 Cameras Set (Home)">2 Cameras Set</option>
                        <option value="4 Cameras Set (Most Popular)">4 Cameras Set (Popular)</option>
                        <option value="8 Cameras Set (Commercial)">8 Cameras Set</option>
                        <option value="12+ Cameras Custom Setup">12+ Cameras Custom</option>
                        <option value="Free Site Inspection First">Free Site Survey</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      City / Area (Location)
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        placeholder="e.g. Ahmedabad, Surat, Rajkot, etc."
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Any Special Request (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Need color night vision, audio recording, quick installation..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                  >
                    <MessageSquare className="w-5 h-5 fill-white" />
                    <span>Send Inquiry to WhatsApp 📲</span>
                  </button>

                  <div className="text-center text-[11px] text-slate-400 pt-1">
                    🔒 100% Privacy. Your contact info is strictly used only to send your quotation.
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
