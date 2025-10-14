import { useState, useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import LatestAnnouncements from "@/components/home/LatestAnnouncements";
import QuickLinks from "@/components/home/QuickLinks";
import StaffPreview from "@/components/home/StaffPreview";
import ContactInfo from "@/components/home/ContactInfo";
import ImageGallery from "@/components/home/ImageGallery";
import UrgentNotificationModal from "@/components/home/UrgentNotificationModal";
import SectionDivider from "@/components/home/SectionDivider";

export default function Ballina() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal after 1 second if there's an urgent announcement
    const timer = setTimeout(() => {
      const hasUrgentAnnouncement = false; // Change to true if you want to show urgent announcements
      if (hasUrgentAnnouncement) {
        setShowModal(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#071018]">
      <UrgentNotificationModal isOpen={showModal} onClose={() => setShowModal(false)} />
      
      <HeroSection />
      
      {/* Background decoration */}
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          {/* Events and Announcements Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Informacion i <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Përditshëm</span>
              </h2>
              <p className="text-gray-400 text-lg">Qëndro i informuar me ngjarjet dhe lajmet e fundit</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <UpcomingEvents />
              <LatestAnnouncements />
            </div>
          </div>

          <SectionDivider />

          {/* Image Gallery */}
          <div className="mb-24">
            <ImageGallery />
          </div>

          <SectionDivider />

          {/* Quick Links Section */}
          <div className="mb-24">
            <QuickLinks />
          </div>

          <SectionDivider />

          {/* Staff Section */}
          <div className="mb-24">
            <StaffPreview />
          </div>

          <SectionDivider />

          {/* Contact Section */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Na <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Kontaktoni</span>
              </h2>
              <p className="text-gray-400 text-lg">Jemi këtu për çdo pyetje ose informacion</p>
            </div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
