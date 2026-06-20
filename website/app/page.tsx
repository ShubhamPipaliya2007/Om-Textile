import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import FabricSwatches from "@/components/FabricSwatches";
import GallerySection from "@/components/GallerySection";
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
      <GallerySection />
      <Catalogs />
      <WhyChooseUs />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}
