import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurMission from "@/components/OurMission";
import CoreValues from "@/components/CoreValues";
import WhyChooseUs from "@/components/WhyChooseUs";
import EliteServices from "@/components/EliteServices";
import CateringOptions from "@/components/CateringOptions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary overflow-x-hidden">
      <Header />
      <Hero />
      <OurMission />
      <CoreValues />
      <WhyChooseUs />
      <EliteServices />
      <CateringOptions />
      <Footer />
    </main>
  );
}
