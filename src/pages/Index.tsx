import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import EquipmentSection from "@/components/EquipmentSection";
import ExtraServicesSection from "@/components/ExtraServicesSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <div className="animate-on-scroll">
        <ServicesSection />
      </div>
      <div className="animate-on-scroll">
        <ProcessSection />
      </div>
      <div className="animate-on-scroll">
        <PricingSection />
      </div>
      <div className="animate-on-scroll">
        <EquipmentSection />
      </div>
      <div className="animate-on-scroll">
        <ExtraServicesSection />
      </div>
      <div className="animate-on-scroll">
        <ContactsSection />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
