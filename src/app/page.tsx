"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Brands from "@/components/Brands";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import CarAdvice from "@/components/tips";
import PromotionSection from "@/components/PromotionSection";
import WhyChooseUs from "@/components/Choose";
import TrustBanner from "@/components/Banner";
import ContactComponent from "@/components/ContactComponent";
import GarageGallery from "@/components/GarageGallery";
export default function Page() {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Navbar />
      <main>
         <Hero />
        <About />
        <Services />
      <WhyChooseUs/>
      <Brands />
      <PromotionSection/>
      <TrustBanner/>
       <Reviews />
       <CarAdvice/>
       <GarageGallery/>
       <ContactComponent/>
        <Footer />  
      </main>
    </div>
  );
}

