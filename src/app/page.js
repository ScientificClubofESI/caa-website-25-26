import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Wilaya from "@/components/Wilaya";
import Workshops from "@/components/Workshops";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
     
      style={{
        backgroundColor: "#FBF9F7",
        backgroundImage: "radial-gradient(circle, #00000018 1.5px, transparent 1px)",
        backgroundSize: "10px 10px",
      }}
    >

      <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Partners />
      <Wilaya />
      <Workshops />
      <FAQ />
      </main>
      <Footer />
    </div>
  );
}