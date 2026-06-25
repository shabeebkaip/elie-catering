import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurServices from "@/components/OurServices";
import EliteServices from "@/components/EliteServices";
import ClientsReach from "@/components/ClientsReach";
import ClosingStatement from "@/components/ClosingStatement";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-purple-deep overflow-x-hidden">
      <Header />
      <Hero />
      <BrandStory />
      <WhyChooseUs />
      <OurServices />
      <EliteServices />
      <ClientsReach />
      <ClosingStatement />
      <BookingForm />
      <Footer />
    </main>
  );
}
