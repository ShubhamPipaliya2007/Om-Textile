import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import FabricSwatches from "@/components/FabricSwatches";
import Catalogs from "@/components/Catalogs";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <FabricSwatches />
      <Catalogs />
      <WhyChooseUs />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}
