import { Hero } from "@/components/home/hero";
import { AboutUs } from "@/components/home/about-us";
import { ServicesSection } from "@/components/home/services";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Footer } from "@/components/home/footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <ServicesSection />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
