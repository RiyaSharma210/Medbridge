import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import Achievements from "./sections/Achievements";
import Services from "./sections/Services";
import WhyChoose from "./sections/WhyChoose";
import Gallery from "./sections/Gallery";
import OfficeSection from "./components/OfficeSection";
import Colleges from "./sections/Colleges";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import AdmissionProcess from "./sections/AdmissionProcess";
import FAQ from "./sections/FAQ";
import CTA from "./sections/CTA";
import Location from "./sections/Location";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <Stats />

      <Achievements />

      <Services />

      <WhyChoose />
      
      <AdmissionProcess />
      <Gallery />

      <OfficeSection />

      <Colleges />


       <FAQ />

      <Testimonials />

       <CTA />
      
      <Location />

      <Contact />
    <Footer />
    <WhatsAppButton />
    </main>
  );
}