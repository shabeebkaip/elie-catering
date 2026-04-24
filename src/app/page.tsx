import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import OurVision from "@/components/OurVision";
import OurMission from "@/components/OurMission";
import CoreValues from "@/components/CoreValues";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurServices from "@/components/OurServices";
import ClosingStatement from "@/components/ClosingStatement";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream overflow-x-hidden">
      <Header />
      <Hero />
      <Introduction />
      <OurVision />
      <OurMission />
      <CoreValues />
      <WhyChooseUs />
      <OurServices />
      <ClosingStatement />
      <Footer />
    </main>
  );
}
