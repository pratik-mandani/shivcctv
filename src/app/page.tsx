import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Packages from '@/components/Packages';
import Features from '@/components/Features';
import InstallationService from '@/components/InstallationService';
import BrandsAndProcess from '@/components/BrandsAndProcess';
import LeadForm from '@/components/LeadForm';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileStickyBar from '@/components/MobileStickyBar';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Navigation Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Camera Packages & Pricing */}
      <Packages />

      {/* Next-Gen Smart Features */}
      <Features />

      {/* Installation Quality & Certified Technicians */}
      <InstallationService />

      {/* Brands & 4-Step Process */}
      <BrandsAndProcess />

      {/* Interactive Lead Capture Form */}
      <LeadForm />

      {/* Real Customer Reviews */}
      <Testimonials />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action for Desktop */}
      <FloatingWhatsApp />

      {/* Fixed Sticky Call & WhatsApp Bar for Mobile */}
      <MobileStickyBar />
    </main>
  );
}
